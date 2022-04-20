const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();

let post = [{
   id:"newPost",
   title:"teste",
   description:"..."
}]


app.get('/all', (req,res)=>{
    res.json(JSON.stringify(post));
})

app.post('/new',(req,res)=>{} )

app.listen(port, () =>{
    console.log(`Server running on ${port}`)
})