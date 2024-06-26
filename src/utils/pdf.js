const puppeteer = require('puppeteer');
const path = require('path');

module.exports = async function buildPdf(inputFile, outputFile) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Get the absolute path of the HTML file
  const absolutePath = path.resolve(inputFile);
  
  // Load the HTML file
  await page.goto(`file://${absolutePath}`, {
    waitUntil: 'networkidle0'
  });

  // Wait for all fonts to be loaded
  await page.evaluate(async () => {
    await document.fonts.ready;
  });

  // Get the dimensions of the content
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight,
    };
  });

  // Generate the PDF
  await page.pdf({
    path: outputFile,
    width: dimensions.width,
    height: dimensions.height,
    printBackground: true,
    preferCSSPageSize: true,
  });

  await browser.close();
};
