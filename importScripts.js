const dotenv = require("dotenv")
const mongoose = require("mongoose")
dotenv.config({ path: "./config.env" })
const fs = require("fs")
const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD)

const Blog = require("./models/blogModel")
// mongoose.connect(DB).then(con => {
//     console.log("Connected to mongoDB \n")
// }).catch((err) => console.log("error is ", err))

const blogData = JSON.parse(fs.readFileSync("./mockData.json", "utf-8"))

const connectDB = async () => {
    await mongoose
      .connect(process.env.DATABASE, {
        // useUnifiedTopology: true,
        // useNewUrlParser: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
      })
      .then(() => console.log('DB connection established'));


const importData = async () => {
    try {
        await Blog.create(blogData)
        console.log("data inserted successfully")

    } catch (error) {
        console.log("error is ", error)

    }
}

const deleteData = async () => {
    try {
        await Blog.deleteMany()
    } catch (error) {
        console.log("error deleting ", error)
    }
}
if (process.argv[2] === '--import') {
    importData();
} else if (process.argv[2] === '--delete') {
    deleteData();
}
}
connectDB()