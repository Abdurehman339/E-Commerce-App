const express = require('express')
const mongoose = require("mongoose");
const app = express()
const ConnectToMongo = require("./db");
const port = 5000

constructor();
app.get('/', (req, res) => {
  res.send('Abdurrehman Here!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})