const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "Username already exists"],
        required: [true, "Username is required"]
    },
    email: {
        type: String,
        unique: [true, "email already exists"],
        required: [true, "email is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    bio:String,
    profile_image:{
        type:String,
        default:"https://ik.imagekit.io/cnivr38iq/Default_profile_image.jpg"
    }

})

const userModel = mongoose.model("user", userSchema)
module.exports = userModel