const router = require("express").Router();
const auth = require("../Middleware/JWT_Verification");
const Cart = require("../models/Cart");
const User = require("../models/User");

router.post("/addtocart", auth, async (req, res) => {
    try {
        const cart = await Cart.findOne({userId: req.body.userid})
        if(!cart){
            const cart = new Cart({
                userId: req.body.userid,
                products: [{
                    productId: req.body.productid,
                    quantity: req.body.quantity
                }]
            })
            const savedCart = await cart.save()
            res.status(200).json(savedCart)
        } else {
            cart.products.push({
                productId: req.body.productid,
                quantity: req.body.quantity
            })
            const savedcart = await cart.save()
            res.status(200).json(savedcart)
        }
    } catch (error) {
        res.status(500).json('Internal Server Error')
    }
});

router.post("/removefromcart", auth, async (req, res) => {
    try {
        const user = await User.findById(req.body.userid)
        if(user){
            const cart = await Cart.findOne({userId: req.body.userid})
            for (let index = 0; index < cart.products.length; index++) {
                if(req.body.productid === (cart.products[index]).productId){
                    cart.products.splice(index,1)
                    break
                }
            }
            const savedCart = await cart.save()
            res.status(200).json(savedCart)
        } else {
            res.status(403).json('Not a Valid User')
        }
    } catch (error) {
        res.status(500).json('Internal Server Error')
    }
});
module.exports = router;