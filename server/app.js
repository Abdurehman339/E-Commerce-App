const express = require('express')
const mongoose = require("mongoose");
const app = express()
const ConnectToMongo = require("./db");
const port = 5000
const auth = require('./routes/authentication')
const cors = require("cors");

ConnectToMongo();

app.use(cors());
app.use(express.json());
app.use('/api/auth',auth);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})