const router = require("express").Router();
const Product = require("../models/Product");
const auth = require("../Middleware/JWT_Verification");


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
      inStock: req.body.inStock, //boolean
    });
    console.log(newProduct)
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

module.exports = router;
