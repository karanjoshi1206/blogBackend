const Blog = require("../models/blogModel.js")

exports.createBlog = async (req, res) => {

    try {
        const newBlog = await Blog.create(req.body)
        res.status(200).json({
            status: true,
            data: {
                blog: newBlog
            }
        })

    } catch (error) {
        console.log("error is ", error)
        res.status(400).json({
            status: false,
            message: error
        })

    }
}

exports.updateBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        return res.status(200).json({
            status: true,
            data: { blog }
        })
    } catch (error) {
        res.status(404).json({
            status: false,
            message: error
        })
    }
}




exports.getBlog = async (req, res) => {

    try {
        const blog = await Blog.findById(req.params.id)
        if (blog)
            res.status(200).json({
                status: true,
                data: { blog }
            })
        else res.status(404).json({
            status: false,
            message: "No data found"
        })
    } catch (error) {
        res.status(404).json({
            status: false,
            message: "Blog not found"
        })

    }
}


exports.getAllBlogs = async (req, res) => {
    try {
        console.log(req.query)

        // 1A) FILTERING
        const queryObj = { ...req.query }
        const excludedQuery = ["page", "limit", "sort", "fields"];
        excludedQuery.forEach(elem => delete queryObj[elem])

        // 1B) ADVANCE FILTERING
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)

        console.log(JSON.parse(queryStr))
        let query = Blog.find(JSON.parse(queryStr))

      
        // 2) SORTING
        if (req.query.sort) {
            let sortQuery = req.query.sort.split(",").join(" ")
            console.log("==>> ",sortQuery)
            query = query.sort(sortQuery)

        }
        else{
            query = query.sort("-createdAt")
        }

        // 3) Field limiting
        if(req.query.fields){
            const fields = req.query.fields.split(',').join(' ');
            query = query.select(fields)
        }
        else{
            query = query.select("-__v")
        }

        const blogs = await query;
        res.status(200).json({
            status: true,
            results: blogs.length,
            data: { blogs }
        })

    } catch (error) {

        console.log("error is ",error)
        res.status(500).json({
            status: false,
            message: error
        })
    } 
}

exports.deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id)
        const allBlogs = await Blog.find()
        res.status(200).json({
            status: true,
            data: { blogs: allBlogs }
        })

    } catch (error) {
        res.status(404).json({
            status: false,
            message: "Blog not found"
        })
    }
}

