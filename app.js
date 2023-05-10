const express = require("express")
const app = express();
const blogRouter = require("./routes/blogsRoute.js")
const userRouter = require("./routes/userRoute.js")

app.use(express.json())


app.use("/api/v1/blogs",blogRouter)
app.use("/api/v1/users",userRouter)


module.exports=app