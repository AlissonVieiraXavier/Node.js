const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();

app.get('/all', (req,res)=>{

})

app.listen(port, () =>{
    console.log(`Server running on ${port}`)
})