const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const dotenv = require("dotenv");
const saltRounds = 10;
const jwt = require('jsonwebtoken');

dotenv.config();

router.post('/register', async (req,res)=>{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password,saltRounds)
    })

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/login', async (req,res)=>{
    try {
        const user = await User.findOne({
            username: req.body.username
        })
        if(!user){
            res.status(401).json('wrong user name')
        } else{
            const password = req.body.password
            if(bcrypt.compareSync(password, user.password)){
                const token = jwt.sign(
                    {
                        id: user._id,
                        isAdmin: user.isAdmin
                    },process.env.SECRET_KEY,
                    {
                        expiresIn: '3d'
                    }
                )
                const { password, ...others } = user._doc;
                res.status(200).json({...others,token});
            } else {
                res.status(401).json('wrong password');
            }
        }
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;