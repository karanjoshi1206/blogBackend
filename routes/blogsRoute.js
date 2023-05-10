const express = require("express");
const { getAllBlogs, getBlog, updateBlog, deleteBlog, createBlog } = require("../controllers/blogController")
const router = express.Router();



router.route('/').get(getAllBlogs).post(createBlog)
router.route('/:id').get(getBlog).patch(updateBlog).delete(deleteBlog)
module.exports = router