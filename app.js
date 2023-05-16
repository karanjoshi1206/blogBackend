const express = require("express")
const cors = require('cors')

const app = express();
const blogRouter = require("./routes/blogsRoute.js")
const userRouter = require("./routes/userRoute.js")

app.use(cors())
app.use(express.json())


app.use("/api/v1/blogs",blogRouter)
app.use("/api/v1/users",userRouter)


module.exports=app