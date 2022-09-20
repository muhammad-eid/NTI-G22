const multer = require("multer")
const path = require("path")
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        // fs.mkdirSync("public/images")
        const myLoc = "public/images"
        cb(null, myLoc)
    },
    filename: function(req, file, cb){
        const myName = file.fieldname+"-"+Date.now()+path.extname(file.originalname)
        cb(null, myName)
    }
})
const upload = multer({
    storage,
    limits:{ fileSize: 200000000 },
    fileFilter: function(req,file, cb){
        if(path.extname(file)!=".png")
            return cb(new Error("invalid ext"), false)
        cb(null, true)
    }
})
module.exports = upload