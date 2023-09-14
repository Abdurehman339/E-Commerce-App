const router = require("express").Router();
const auth = require("../Middleware/JWT_Verification");
const Product = require("../models/Product");

router.get("/fetchProduct", auth, async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json('Internal Server Error')
    }
});

router.get('/fetchsingleproduct/:id', auth, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json("Internal Server Error")
    }
})

module.exports = router;