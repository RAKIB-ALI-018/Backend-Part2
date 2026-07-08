const mongoose = require("mongoose")

function connectToDB() {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Connected To DB")
        })
        .catch((err) => {
            console.log("Connection Failed: ", err.message)

        })
}

module.exports = connectToDB