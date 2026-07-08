const express = require("express")
const userModel = require("../Models/user.model")
const jwt = require("jsonwebtoken") //JWT

const authRouter = express.Router()


// /api/auth/register
authRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    const isUserAlreadyExists = await userModel.findOne({ email }) //

    if (isUserAlreadyExists) {
        return res.status(400).json({
            message: "User already exists with this email"
        })
    }

    const user = await userModel.create({
        name, email, password
    })

    const token = jwt.sign(
        {
            id: user._id,
            email:user.email
        },
        process.env.JWT_SECRET
    )
    res.cookie("jwt_cookie", token)

    res.status(201).json({
        message: "User registered successfully",
        user,
        token
    })
})
// 

module.exports = authRouter