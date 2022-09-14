const mongoose = require("mongoose")
const User = mongoose.model("User",{
    name:{
        type:String, trim:true, required:true
    },
    email:{
        type:String, trim:true, required:true, unique:true
    },
    age:{
        type:Number, default:21, min:21, max:60
    },
    status:{
        type:Boolean,
        default:false
    },
    addresses: [
        {
            addrType:{
                type:String, trim:true, required:true
            },
            addrDetails:{
                type:String, trim:true, required:true
            }
        }
    ]
})
module.exports = User