const User = require("../models/userModel")

exports.getAllUsers = async (req, res) => {
    console.log("insideeee")
    const users = await User.find()
    try {
        res.status(200).json({
            status: true,
            data: users
        })

    } catch (error) {
        res.status(400).json({
            status: false,
            message: error
        })
    }
}
exports.createUser = async (req, res) => {
    console.log("inside")
    try {
        const newUser =await User.create(req.body)
        res.status(200).json({
            status: true,
            data: newUser
        })

    } catch (error) {
        res.status(400).json({
            status: false,
            message: error
        })
    }
}
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true   })
        res.status(200).json({
            status: true,
            data: user
        })

    } catch (error) {
        res.status(400).json({
            status: false,
            message: error
        })
    }
}
exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json({
            status: true,
            data: user
        })

    } catch (error) {
        res.status(400).json({
            status: false,
            message: error
        })
    }
}
exports.deleteUser = async (req, res) => {
    try {
        res.status(200).json({
            status: true,
            data: user
        })

    } catch (error) {
        res.status(400).json({
            status: false,
            message: error
        })
    }
}