const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    name:{
        type:String, trim:true, required: true
    }, 
    age:{
        type:Number, default:21
    }, 
    email:{
        type:String, trim:true, required: true, unique:true
    }, 
    address:{
        type:String, trim:true 
    }, 
    image:{
        type:String, trim:true
    }, 
    password:{
        type:String,
        trim:true,
        required: true
    }, 
    status:{
        type:Boolean,
        default:false
    },
    gender:{
        type:String, trim:true, enum:["Male", "Female"]
    }
},
{ timestamps:true }
)

const User = mongoose.model("User", userSchema)
module.exports = User