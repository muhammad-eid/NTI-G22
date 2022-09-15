const mongoose = require("mongoose")
const bcyptjs = require("bcryptjs")
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

userSchema.methods.toJSON = function(){
    const userData = this.toObject()
    // delete userData.password
    delete userData.__v
    // delete userData._id
    return userData
}
userSchema.pre("save", async function(){
    const data = this
    if(data.isModified("password")){
        data.password = await bcyptjs.hash(data.password, 12)
    }
})
userSchema.statics.checkPass = async(user, oldPass) => {
    const isValid = await bcyptjs.compare(oldPass, user.password)
    return isValid
}
const User = mongoose.model("User", userSchema)
module.exports = User