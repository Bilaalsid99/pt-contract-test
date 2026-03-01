// src/lib/pdf/htmlToPdf.ts
import { chromium } from "playwright";

export async function htmlToPdfBuffer(html: string): Promise<Buffer> {
  if (!html || typeof html !== "string") {
    throw new Error("Missing html");
  }

  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();

    // Ensure consistent rendering
    await page.setContent(html, { waitUntil: "networkidle" });

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: "18mm", right: "14mm", bottom: "18mm", left: "14mm" },
    });

    return Buffer.from(pdf);
  } finally {
    await browser.close();
  }
}