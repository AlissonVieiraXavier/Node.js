//const fetch = require("node-fetch");

function checaStatus(arrayURLs) {}
function geraArrayDeURLS(arrayLinks) {
  //object.values(objeto);
  return arrayLinks.map((objetoLink) => Object.values(objetoLink).join());
}

function validaURLs(arrayLinks) {
  return geraArrayDeURLS(arrayLinks);
}

module.exports = validaURLs;
