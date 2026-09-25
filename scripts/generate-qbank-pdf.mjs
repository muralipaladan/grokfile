import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const url = process.env.QBANK_URL ?? "http://127.0.0.1:8080/print";
const out = process.env.QBANK_OUT ?? path.join(process.cwd(), "public/kbm-department-test-qbank.pdf");

await mkdir(path.dirname(out), { recursive: true });

const browser = await chromium.launch({
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
const page = await browser.newPage();
await page.goto(url, { waitUntil: "networkidle", timeout: 120_000 });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(800);
await page.pdf({
  path: out,
  format: "A4",
  printBackground: true,
  margin: { top: "16mm", bottom: "16mm", left: "14mm", right: "14mm" },
});
await browser.close();
console.log("Wrote", out);
