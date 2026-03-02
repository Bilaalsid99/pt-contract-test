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

function cleanHtml(input: string) {
  return input
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .trim();
}

function extractBlocks(html: string): { type: string; content: string }[] {
  const blocks: { type: string; content: string }[] = [];

  const cleaned = cleanHtml(html);

  // Headings
  const headingRegex = /<(h[1-6])[^>]*>(.*?)<\/\1>/gi;
  let match;
  while ((match = headingRegex.exec(cleaned))) {
    blocks.push({ type: "heading", content: match[2] });
  }

  // List items
  const listRegex = /<li[^>]*>(.*?)<\/li>/gi;
  while ((match = listRegex.exec(cleaned))) {
    blocks.push({ type: "bullet", content: match[1] });
  }

  // Paragraphs
  const paragraphRegex = /<p[^>]*>(.*?)<\/p>/gi;
  while ((match = paragraphRegex.exec(cleaned))) {
    blocks.push({ type: "paragraph", content: match[1] });
  }

  return blocks.map((b) => ({
    type: b.type,
    content: b.content.replace(/<[^>]+>/g, "").trim(),
  }));
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
    marginBottom: 18,
  },
  heading: {
    fontSize: 13,
    fontWeight: 700,
    marginTop: 14,
    marginBottom: 6,
  },
  paragraph: {
    marginBottom: 8,
  },
  bullet: {
    marginLeft: 12,
    marginBottom: 4,
  },
});

function AgreementDocument({ html }: { html: string }) {
  const blocks = extractBlocks(html);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Client Onboarding Pack</Text>

        {blocks.map((block, i) => {
          if (block.type === "heading") {
            return (
              <Text key={i} style={styles.heading}>
                {block.content}
              </Text>
            );
          }

          if (block.type === "bullet") {
            return (
              <Text key={i} style={styles.bullet}>
                • {block.content}
              </Text>
            );
          }

          return (
            <Text key={i} style={styles.paragraph}>
              {block.content}
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

  const pdfBytes = await renderToBuffer(
    <AgreementDocument html={input} />
  );

  if (Buffer.isBuffer(pdfBytes)) return pdfBytes;

  return Buffer.from(pdfBytes);
}