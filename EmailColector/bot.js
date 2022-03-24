const puppeter = require("puppeter");

async function bot(url) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);

  //  await page.type("#textAreaMensagem", "Teste de formulario automatizado");
  //  await page.click("#formButton");
  await page.waitForTimeout(3000);

  await browser.close();
}
