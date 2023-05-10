const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema({

    description: {
        type: String,
        required: [true, "Description is required for a blog"]
    },
    // image: {
    //     type: String,
    //     required: [true, "Image is required for a blog"]
    // },

    likeCount:{
        type:Number,
        default:0
    },
    category:{
        type:String,
        required:[true,"Category is required"],
        trim:true
    },
    creatredAt:{
        type:Date,
        default: Date.now()
    },
    author:{
        type:Object,
        required:[true,"Author is required"]
    }
})



const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog