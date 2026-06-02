const mongoose = require("mongoose")

function connectToDB() {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Connected To DB.");
        })
        .catch((err) => {
            console.log("Database connection failed: ", err.message);

        })
}

module.exports = connectToDB