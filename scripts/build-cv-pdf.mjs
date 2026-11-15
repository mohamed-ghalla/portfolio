// Prints the CV page to public/Mohamed_Ghalla_CV.pdf (text-based, ATS-readable).
// Usage: start the dev server (npm run dev), then:
//   CHROME=/usr/bin/google-chrome CV_URL=http://localhost:5173/#/cv node scripts/build-cv-pdf.mjs
// Needs puppeteer-core available (npm i -D puppeteer-core).
import puppeteer from 'puppeteer-core';

const url = process.env.CV_URL || 'http://localhost:5173/#/cv';
const browser = await puppeteer.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.goto(url, { waitUntil: 'networkidle0' });
await page.emulateMediaType('print');
await page.pdf({ path: new URL('../public/Mohamed_Ghalla_CV.pdf', import.meta.url).pathname, format: 'A4', printBackground: true, preferCSSPageSize: true });
await browser.close();
console.log('Wrote public/Mohamed_Ghalla_CV.pdf');
