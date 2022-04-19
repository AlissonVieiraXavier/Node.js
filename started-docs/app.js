/*const http = require('http')

const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((req, res)=>{
    res.end("xuxu beleza");
    res.statusCode = 200;
})
server.listen(port,hostname,()=>{
  console.log("running")  
})
*/
const express = require('express');
const app = express();
const path = require('path')
const router = express.Router();

router.get("/",(req,res)=>{
     res.sendFile(path.join(__dirname,"/index.html"))
})

app.use('/',router)
app.listen(process.env.port || 3000);