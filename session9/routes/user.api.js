const router = require("express").Router()
const userController =  require("../app/controller/user.controller")
router.post("/register", userController.register)
router.get("/all", userController.all)
router.get("/all/:id", userController.single)
router.delete("/all/:id", userController.deleteUser)
router.patch("/all/:id", userController.editUser)
router.patch("/all/editPass/:id", userController.editPass)

module.exports = router