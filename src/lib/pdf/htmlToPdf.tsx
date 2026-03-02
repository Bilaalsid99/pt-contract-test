// src/lib/pdf/htmlToPdf.tsx

import React from "react";
import {
  Document,
  Page,
  Text,
  StyleSheet,
  renderToBuffer,
} from "@react-pdf/renderer";

/**
 * Strip basic HTML into readable text.
 * Keeps things deterministic and serverless-safe.
 */
function stripHtmlToText(input: string) {
  return input
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<\/h[1-6]>/gi, "\n\n")
    .replace(/<li>/gi, "• ")
    .replace(/<\/li>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

const styles = StyleSheet.create({
  page: {
    paddingTop: 50,
    paddingBottom: 50,
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 16,
    marginBottom: 16,
  },
  body: {
    fontSize: 11,
    lineHeight: 1.35,
  },
});

function AgreementDocument({ text }: { text: string }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Client Onboarding Pack</Text>
        <Text style={styles.body}>{text}</Text>
      </Page>
    </Document>
  );
}

export async function htmlToPdfBuffer(input: string): Promise<Buffer> {
  if (!input || typeof input !== "string") {
    throw new Error("Missing html");
  }

  const text = stripHtmlToText(input);

  const pdfBytes = await renderToBuffer(
    <AgreementDocument text={text} />
  );

  // renderToBuffer may return Uint8Array in serverless
  if (Buffer.isBuffer(pdfBytes)) return pdfBytes;

  return Buffer.from(pdfBytes);
}