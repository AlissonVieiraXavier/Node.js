const puppeteer = require('puppeteer');

let urls = ["https://site-tiger-school.vercel.app/"];

async function bot(url) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url);
  
  await page.type("#inputName","Alisson Vieira Xavier");
  await page.type("#inputEmail", "alissonvieraxavier@hotmail.com");
  await page.type("#textAreaMensagem", "Teste de formulario automatizado");
  await page.click("#formButton");

  await browser.close();
  
};

async function RealizaTestes(urls){
  for(let i = 0; i < urls.length;i++){
    await bot(urls[i]);
  }
  console.log("Testes realizados");
};

RealizaTestes(urls);

