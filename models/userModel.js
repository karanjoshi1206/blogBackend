const mongoose = require("mongoose")
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "name is required"]
        },
        userName: {
            type: String,
            required: [true, "username is required"],
            unique: true
        },
        email: {
            type: String,
            required: [true, "email is required"],
            unique: true
        },
        password: {
            type: String,
            required: [true, "password is required"]
        }

    }
)

const User = mongoose.model('User',userSchema)
module.exports = User