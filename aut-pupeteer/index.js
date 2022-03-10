const puppeteer = require("puppeteer");

let urls = [
  "https://www.npmjs.com/package/puppeteer",
  "https://cursos.alura.com.br/formacao-front-end",
  "https://github.com/puppeteer/puppeteer/blob/v13.5.1/docs/api.md#pagepdfoptions",
  "https://github.com/AlissonVieiraXavier",
];

console.log("running");

async function bot(url, posicao) {
  //Mostrar procedimento?
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  //endereco https;
  await page.goto(url);
  await page.screenshot({ path: `img/example${posicao}.png` });
  await browser.close();
}

bot(urls[0], "0");
