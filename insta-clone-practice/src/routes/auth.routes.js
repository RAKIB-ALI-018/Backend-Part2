const express = require("express")
const userModel = require("../models/user.model")
const authRouter = express.Router()
const jwt = require("jsonwebtoken")
const crypto = require("crypto")


// POST /api/auth/register
authRouter.post("/register", async(req, res)=>{
    const {username, bio, email, password, profile_image} = req.body

    const isUserAlreadyExists = await userModel.findOne({
        $or:[
            {email},
            {username}
        ]
    })

    if(isUserAlreadyExists){
        return res.status(409).json({
            message:"User already exists"+(isUserAlreadyExists.email===email?"Email already exists":"username already exists")
        })
    }

    const hash = crypto.createHash('sha256').update(password).digest('hex');
    const user = await userModel.create({
        email, bio, password:hash, username, profile_image
    })

    const token = jwt.sign({
        id:user._id
    }, process.env.JWT_SECRET, {expiresIn:"1d"})

    res.cookie("token", token)

    res.status(201).json({
        message:"User Registered Successfully.",
        user:{
            email:user.email,
            username:user.username,
            bio:user.bio,
            profile_image:user.profile_image

        }
    })



})

module.exports = authRouter