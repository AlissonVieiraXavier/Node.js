const chalk = require("chalk");
const fs = require("fs");
const texto =
  "São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)";

function extraiLinks() {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const LinksExtraidos = regex.exec(texto);
  console.log(LinksExtraidos);
}

function trataErro(err) {
  throw new Error(chalk.redBright(err.code, "Algo de Errado não esta certo!"));
}

async function pegaArquivo(caminhoDoArquivo) {
  const encoding = "utf-8";
  try {
    const text = await fs.promises.readFile(caminhoDoArquivo, encoding);
    console.log(chalk.greenBright(text));
  } catch (err) {
    trataErro(err);
  }
}
extraiLinks();
//pegaArquivo("./arquivos/texto1.md");
