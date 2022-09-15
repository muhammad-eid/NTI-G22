const router = require("express").Router()
const userController =  require("../app/controller/user.controller")
router.post("/register", userController.register)
router.get("/all", userController.all)
module.exports = router