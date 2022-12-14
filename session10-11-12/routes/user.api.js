const router = require("express").Router()
const auth = require("../app/middleware/auth")
const userController =  require("../app/controller/user.controller")
router.post("/register", userController.register)
router.get("/all", userController.all)
router.get("/all/:id", userController.single)
router.delete("/all/:id", userController.deleteUser)
router.patch("/all/:id", userController.editUser)
router.patch("/all/editPass/:id", userController.editPass)
router.post("/login", userController.login)
router.post("/me", auth, userController.me)
router.post("/logout", auth, userController.logout)
router.post("/logoutAll", auth, userController.logoutAll)
router.patch("/changeStatus", auth, userController.changeStatus)
const multer  = require('multer')
const upload = multer({ dest: 'public/' })
router.post('/profile',auth ,upload.single('img'),  userController.imgUpload)
router.delete("/delMe", auth, userController.delMe)
const upload1 = require("../app/middleware/file-upload")
router.post('/profile1' ,auth,upload1.single('img'), async(req,res)=>{
    try{
        req.user.image = req.file.path
        await req.user.save()
        res.send(req.user)
    }
    catch(e){
        res.send(e.message)
    }
})

module.exports = router