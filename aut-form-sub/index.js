const puppeteer = require("puppeteer");
let urls = ["https://site-tiger-school.vercel.app/"];

async function bot(url) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForTimeout(10000);
  await page.type(
    "inputName",
    "Alisson Xavier || teste de formulario automatizado"
  );
  await page.type("inputEmmail", "alissonvieraxavier@hotmail.com");
  await page.click("form button");

  await browser.close();
}

bot(urls[0]);
