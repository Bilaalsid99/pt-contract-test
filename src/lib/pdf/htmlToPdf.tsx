// src/lib/pdf/htmlToPdf.tsx

import React from "react";
import {
  Document,
  Page,
  Text,
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
    .replace(/&gt;/g, ">");
}

function stripInlineTags(s: string) {
  // removes <strong>, <em>, <span>, etc. Keeps their text.
  return s.replace(/<[^>]+>/g, "");
}

type Block =
  | { type: "heading"; level: number; content: string }
  | { type: "paragraph"; content: string }
  | { type: "bullet"; content: string };

function extractBlocks(html: string): Block[] {
  const cleaned = cleanHtml(html);
  const blocks: Block[] = [];

  // capture h1-h6, p, li IN ORDER
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
      blocks.push({ type: "paragraph", content: raw });
    }
  }

  // Fallback: if template doesn't use p/li/h tags much, at least dump text
  if (blocks.length === 0) {
    const plain = decodeEntities(stripInlineTags(cleaned))
      .replace(/\n{3,}/g, "\n\n")
      .trim();
    if (plain) blocks.push({ type: "paragraph", content: plain });
  }

  return blocks;
}

const styles = StyleSheet.create({
  page: {
    paddingTop: 50,
    paddingBottom: 50,
    paddingHorizontal: 40,
    fontSize: 11,
    lineHeight: 1.4,
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 12,
  },
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
  paragraph: {
    marginBottom: 8,
  },
  bullet: {
    marginLeft: 14,
    marginBottom: 4,
  },
});

function AgreementDocument({ html }: { html: string }) {
  const blocks = extractBlocks(html);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Client Onboarding Pack</Text>

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