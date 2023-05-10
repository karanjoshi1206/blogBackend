const dotenv = require("dotenv")
const app = require("./app")
const mongoose = require("mongoose")
const Blog = require("./models/blogModel")
const port = process.env.PORT || 3004
dotenv.config({ path: "./config.env" })

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD)

mongoose.connect(DB).then(con => {
    console.log("Connected to mongoDB \n")
}).catch((err) => console.log("error is ", err))
app.listen(port, () => {
    console.log("app is running on ", port)
})