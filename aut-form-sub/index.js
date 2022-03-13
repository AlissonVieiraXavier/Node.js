const puppeteer = require('puppeteer');

let urls = ["https://site-tiger-school.vercel.app/"];

async function bot(url) {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 500, height: 650 });
  await page.goto(url);
  
  await page.type("#inputName","Alisson Vieira Xavier");
  await page.type("#inputEmail", "alissonvieraxavier@hotmail.com");
  await page.type("#textAreaMensagem", "Teste de formulario automatizado");
  await page.click("#formButton");
  await page.waitForTimeout(3000);

  await browser.close();
  
};

async function RealizaTestes(urls){
  for(let i = 0; i < urls.length;i++){
    await bot(urls[i]);
  }
  console.log("Formulario preenchido e enviado.");
};

RealizaTestes(urls);

