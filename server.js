const dotenv = require("dotenv")
dotenv.config({ path: "./.env" })
const app = require("./app")
const mongoose = require("mongoose")
const port = process.env.PORT || 3004

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD)


mongoose.connect(DB).then(con => {
    console.log("DB is ",DB)
    app.listen(port, () => {
        console.log("app is running on ", port)
    })
}).catch((err) => console.log("error is ", err))