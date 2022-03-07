const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  console.log("xuxu Beleza");
  console.log(process.env.PASSWORD);
});

app.listen(3333);
