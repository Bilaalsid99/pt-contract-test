// src/lib/pdf/htmlToPdf.ts
import { Buffer } from "buffer";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

// Vercel/bundlers can expose vfs_fonts in different shapes.
// Support both:
//   - pdfFonts.pdfMake.vfs
//   - pdfFonts.vfs
const vfs =
  (pdfFonts as any).pdfMake?.vfs ??
  (pdfFonts as any).vfs;

if (!vfs) {
  throw new Error("pdfmake fonts (vfs) not available");
}

// Attach fonts to pdfmake
(pdfMake as any).vfs = vfs;

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

  const pdfDoc = (pdfMake as any).createPdf(docDefinition);
  const uint8: Uint8Array = await pdfDoc.getBuffer();

  return Buffer.from(uint8);
}