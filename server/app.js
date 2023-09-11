const express = require('express')
const mongoose = require("mongoose");
const app = express()
const ConnectToMongo = require("./db");
const port = 5000
const auth = require('./routes/authentication')
const addProduct = require('./routes/addProduct')
const fetchProduct = require('./routes/fetchProduct')
const cors = require("cors");
const multer = require("multer");
const uuidv4 = require("uuid/v4");
const path = require("path");

ConnectToMongo();

app.use(cors());
app.use(express.json());

app.use('/images',express.static(path.join(__dirname,'/uploads')))

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "./uploads");
    },
    filename: (req, file, cb)=>{
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage: storage });

app.post("/api/uploadimage", upload.single("file"), function (req, res) {
  try {
    if (req.file === null) {
      res.status(400).json({ msg: "No file uploaded" });
    } else {
      res.status(200).json({filename: req.file.filename});
    }
  } catch (error) {
    res.status(500).json(error);
  }
});
app.use(express.json());
app.use('/api',addProduct);
app.use('/api/auth',auth);
app.use('/api/fetch',fetchProduct);

//Uploading an Image of Product

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})