const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})