// src/lib/pdf/htmlToPdf.tsx
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  renderToBuffer,
} from "@react-pdf/renderer";

export const runtime = "nodejs";

function cleanHtml(input: string) {
  return input
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .trim();
}

function decodeEntities(s: string) {
  return s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function stripInlineTags(s: string) {
  // Preserve <br> as newline before stripping tags
  const withBreaks = s.replace(/<br\s*\/?>/gi, "\n");
  return withBreaks.replace(/<[^>]+>/g, "");
}

type Block =
  | { type: "heading"; level: number; content: string }
  | { type: "paragraph"; content: string }
  | { type: "bullet"; content: string }
  | { type: "signature"; lines: string[] };

function extractBlocks(html: string): Block[] {
  const cleaned = cleanHtml(html);
  const blocks: Block[] = [];

  // Capture h1-h6, p, li IN ORDER
  const re = /<(h[1-6]|p|li)\b[^>]*>([\s\S]*?)<\/\1>/gi;

  let m: RegExpExecArray | null;
  while ((m = re.exec(cleaned))) {
    const tag = m[1].toLowerCase();
    const raw = decodeEntities(stripInlineTags(m[2])).trim();
    if (!raw) continue;

    if (tag.startsWith("h")) {
      const level = Number(tag.slice(1));
      blocks.push({ type: "heading", level, content: raw });
    } else if (tag === "li") {
      blocks.push({ type: "bullet", content: raw });
    } else {
      // Split paragraphs on preserved newlines so <br> doesn't become a single ugly line
      const parts = raw
        .split(/\n+/g)
        .map((x) => x.trim())
        .filter(Boolean);

      for (const p of parts) blocks.push({ type: "paragraph", content: p });
    }
  }

  // Fallback: dump plain text
  if (blocks.length === 0) {
    const plain = decodeEntities(stripInlineTags(cleaned))
      .replace(/\n{3,}/g, "\n\n")
      .trim();
    if (plain) blocks.push({ type: "paragraph", content: plain });
  }

  // Convert everything after a "Signatures" heading into a signature block
  // This prevents splitting and lets us format it properly.
  const sigIdx = blocks.findIndex(
    (b) => b.type === "heading" && /signatures/i.test(b.content)
  );

  if (sigIdx !== -1) {
    const before = blocks.slice(0, sigIdx + 1);
    const after = blocks.slice(sigIdx + 1);

    const sigLines: string[] = [];
    for (const b of after) {
      if (b.type === "paragraph") sigLines.push(b.content);
      if (b.type === "bullet") sigLines.push(`• ${b.content}`);
    }

    return [...before, { type: "signature", lines: sigLines }];
  }

  return blocks;
}

const styles = StyleSheet.create({
  page: {
    paddingTop: 50,
    paddingBottom: 50,
    paddingHorizontal: 40,
    fontSize: 11,
    lineHeight: 1.45,
  },

  // Document title
  packTitle: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 10,
  },

  // Headings
  heading1: {
    fontSize: 13,
    fontWeight: 700,
    marginTop: 14,
    marginBottom: 6,
  },
  heading2: {
    fontSize: 12,
    fontWeight: 700,
    marginTop: 10,
    marginBottom: 4,
  },

  // Body
  paragraph: {
    marginBottom: 8,
  },
  bullet: {
    marginLeft: 14,
    marginBottom: 4,
  },

  // Signature formatting
  signatureBlock: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
    borderTopStyle: "solid",
  },
  sigRow: {
    flexDirection: "row",
    gap: 24,
  },
  sigCol: {
    flexGrow: 1,
    flexBasis: 0,
  },
  sigLabel: {
    fontSize: 11,
    fontWeight: 700,
    marginBottom: 6,
  },
  sigLine: {
    marginBottom: 4,
  },
  sigBlank: {
    marginBottom: 10,
  },
});

function splitSignatureColumns(lines: string[]) {
  const trainerStart = lines.findIndex((l) => /^trainer\b/i.test(l));
  const clientStart = lines.findIndex((l) => /^client\b/i.test(l));

  if (trainerStart === -1 || clientStart === -1) {
    return { left: lines, right: [] };
  }

  let left = lines.slice(trainerStart, clientStart);
  let right = lines.slice(clientStart);

  // Remove duplicated header words from content lines
  if (left.length && /^trainer\b/i.test(left[0])) left = left.slice(1);
  if (right.length && /^client\b/i.test(right[0])) right = right.slice(1);

  return { left, right };
}

function AgreementDocument({ html }: { html: string }) {
  const blocks = extractBlocks(html);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.packTitle}>Client Onboarding Pack</Text>

        {blocks.map((b, i) => {
          if (b.type === "heading") {
            const style = b.level <= 2 ? styles.heading1 : styles.heading2;
            return (
              <Text key={i} style={style}>
                {b.content}
              </Text>
            );
          }

          if (b.type === "bullet") {
            return (
              <Text key={i} style={styles.bullet}>
                • {b.content}
              </Text>
            );
          }

          if (b.type === "signature") {
            const { left, right } = splitSignatureColumns(b.lines);

            // wrap={false} prevents splitting this block across pages.
            // If it doesn't fit, it moves to the next page.
            return (
              <View key={i} style={styles.signatureBlock} wrap={false}>
                <View style={styles.sigRow}>
                  <View style={styles.sigCol}>
                    <Text style={styles.sigLabel}>Trainer</Text>
                    {left.length > 0 ? (
                      left.map((l, idx) => (
                        <Text key={idx} style={styles.sigLine}>
                          {l}
                        </Text>
                      ))
                    ) : (
                      <>
                        <Text style={styles.sigBlank}>
                          Signature: ______________________
                        </Text>
                        <Text style={styles.sigBlank}>
                          Date: __________________________
                        </Text>
                      </>
                    )}
                  </View>

                  <View style={styles.sigCol}>
                    <Text style={styles.sigLabel}>Client</Text>
                    {right.length > 0 ? (
                      right.map((l, idx) => (
                        <Text key={idx} style={styles.sigLine}>
                          {l}
                        </Text>
                      ))
                    ) : (
                      <>
                        <Text style={styles.sigBlank}>
                          Signature: ______________________
                        </Text>
                        <Text style={styles.sigBlank}>
                          Date: __________________________
                        </Text>
                      </>
                    )}
                  </View>
                </View>
              </View>
            );
          }

          return (
            <Text key={i} style={styles.paragraph}>
              {b.content}
            </Text>
          );
        })}
      </Page>
    </Document>
  );
}

export async function htmlToPdfBuffer(input: string): Promise<Buffer> {
  if (!input || typeof input !== "string") {
    throw new Error("Missing html");
  }

  const pdfBytes = await renderToBuffer(<AgreementDocument html={input} />);

  if (Buffer.isBuffer(pdfBytes)) return pdfBytes;
  return Buffer.from(pdfBytes);
}