const puppeteer = require("puppeteer");

//paginas que desejo tirar print
let urls = [
  "https://www.npmjs.com/package/puppeteer",
  "https://cursos.alura.com.br/formacao-front-end",
  "https://github.com/puppeteer/puppeteer/blob/v13.5.1/docs/api.md#pagepdfoptions",
  "https://github.com/AlissonVieiraXavier",
  "https://www.youtube.com/",
  "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
];

console.log("running");

async function bot(url, posicao) {
  //Mostrar procedimento?
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  //endereco https;
  await page.goto(url);
  await page.pdf({ path: `pdfs/pdf${posicao}.pdf` });
  await browser.close();
}

async function realizaPrint() {
  for (let i = 0; i < urls.length; i++) {
    await bot(urls[i], i);
  }
  console.log("Prints realizados. disponiveis na pasta 'img' ");
}

realizaPrint();
