const puppeteer = require("puppeteer");

console.log("running");

async function bot() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.npmjs.com/package/puppeteer");
  await page.screenshot({ path: "img/example.png" });
  await browser.close();
}

bot();
