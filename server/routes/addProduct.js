const router = require("express").Router();
const Product = require("../models/Product");
const auth = require("../Middleware/JWT_Verification");
const multer = require("multer");
const uuidv4 = require("uuid/v4");

router.post("/addproduct", auth, async (req, res) => {
  try {
    const newProduct = new Product({
      title: req.body.title,
      desc: req.body.desc,
      img: req.body.img,
      categories: req.body.categories, //Array
      size: req.body.size,
      color: req.body.color,
      price: req.body.price, //number
    });
    try {
      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//Uploading an Image of Product
const DIR = "./uploads";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, uuidv4() + "-" + fileName);
  },
});
var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});
router.post("/uploadimage", auth, upload.single("file"), async (req, res) => {
  try {
    if (req.file === null) {
      res.status(400).json({ msg: "No file uploaded" });
    } else {
      res.status(200).json({ filename: req.file.filename });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
