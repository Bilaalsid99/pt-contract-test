// src/lib/pdf/htmlToPdf.ts

import { Buffer } from "buffer";
import { JSDOM } from "jsdom";
import htmlToPdfmake from "html-to-pdfmake";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

// @ts-expect-error
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export async function htmlToPdfBuffer(html: string): Promise<Buffer> {
  if (!html || typeof html !== "string") {
    throw new Error("Missing html");
  }

  const dom = new JSDOM(`<!doctype html><html><body></body></html>`);
  const { window } = dom;

  const content = htmlToPdfmake(html, { window });

  const docDefinition: any = {
    info: { title: "Client Onboarding Pack" },
    pageSize: "A4",
    pageMargins: [40, 50, 40, 50],
    content: Array.isArray(content) ? content : [content],
    defaultStyle: {
      font: "Roboto",
      fontSize: 11,
      lineHeight: 1.2,
    },
  };

  const pdfDoc = pdfMake.createPdf(docDefinition);

  // pdfmake 0.3.x returns a Promise
  const uint8 = await pdfDoc.getBuffer();

  return Buffer.from(uint8);
}