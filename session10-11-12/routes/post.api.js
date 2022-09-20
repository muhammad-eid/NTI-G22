const router = require("express").Router()
const postController = require("../app/controller/post.controller")
const auth = require("../app/middleware/auth")
router.post("/add", auth, postController.create)
module.exports = router