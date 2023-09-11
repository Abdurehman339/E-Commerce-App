const router = require("express").Router();
const auth = require("../Middleware/JWT_Verification");
const Prouct = require("../models/Product");

router.get("/fetchProduct", auth, async (req, res) => {
    try {
        const products = await Prouct.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json('Internal Server Error')
    }
});

module.exports = router;