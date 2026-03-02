// src/lib/pdf/htmlToPdf.ts
import { Buffer } from "buffer";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

// @ts-expect-error
pdfMake.vfs = pdfFonts.pdfMake.vfs;

/**
 * Serverless-safe PDF generator.
 * NOTE: This no longer renders HTML. It expects plain text.
 * If you pass HTML, it will be treated as text (tags will show).
 */
export async function htmlToPdfBuffer(input: string): Promise<Buffer> {
  if (!input || typeof input !== "string") {
    throw new Error("Missing html");
  }

  // Very simple "HTML-ish" cleanup so tags don't look insane.
  // (You can remove this if your input is already plain text.)
  const text = input
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<\/h[1-6]>/gi, "\n\n")
    .replace(/<li>/gi, "• ")
    .replace(/<\/li>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  const docDefinition: any = {
    info: { title: "Client Onboarding Pack" },
    pageSize: "A4",
    pageMargins: [40, 50, 40, 50],
    content: [{ text, fontSize: 11, lineHeight: 1.2 }],
    defaultStyle: { font: "Roboto" },
  };

  const pdfDoc = pdfMake.createPdf(docDefinition);
  const uint8 = await pdfDoc.getBuffer();
  return Buffer.from(uint8);
}