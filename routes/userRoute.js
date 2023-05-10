const express = require("express")
const {getUser,updateUser,deleteUser,createUser,getAllUsers} = require("../controllers/userController")
const router = express.Router()

router.route("/").get(getAllUsers).post(createUser)
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser)
module.exports=router