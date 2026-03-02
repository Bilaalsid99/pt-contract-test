// src/lib/pdf/htmlToPdf.ts
import { Buffer } from "buffer";
import React from "react";
import { Document, Page, Text, StyleSheet, pdf } from "@react-pdf/renderer";

/**
 * Strip basic HTML into readable text.
 * This keeps it simple and serverless-safe.
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

export async function htmlToPdfBuffer(input: string): Promise<Buffer> {
  if (!input || typeof input !== "string") {
    throw new Error("Missing html");
  }

  const text = stripHtmlToText(input);

  const doc = (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>Client Onboarding Pack</Text>
        <Text style={styles.body}>{text}</Text>
      </Page>
    </Document>
  );

const instance = pdf(doc);
const out = await instance.toBuffer();

if (Buffer.isBuffer(out)) return out;

if (out instanceof Uint8Array) {
  return Buffer.from(out);
}

if (out instanceof ArrayBuffer) {
  return Buffer.from(new Uint8Array(out));
}

if ((out as any)?.buffer instanceof ArrayBuffer) {
  return Buffer.from(new Uint8Array((out as any).buffer));
}

throw new Error("Unexpected PDF buffer type");
}