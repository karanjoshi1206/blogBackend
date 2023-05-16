const dotenv = require("dotenv")
dotenv.config({ path: "./.env" })
const app = require("./app")
const mongoose = require("mongoose")
const port = process.env.PORT || 3004

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD)

app.listen(port, () => {
    console.log("app is running on ", port)
})
mongoose.connect(DB).then(con => {
    console.log("Connected to mongoDB \n")
}).catch((err) => console.log("error is ", err))