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
    },
    tokens:[
        {
            token: {type:String, required:true}
        }
    ],
    // userType:{enum:["user", "admin"]}
},
{ timestamps:true }
)

userSchema.methods.toJSON = function(){
    const userData = this.toObject()
    // delete userData.password
    delete userData.__v
    // delete userData._id
    delete userData.tokens
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
userSchema.statics.login = async(email, pass)=>{
    const userData = await User.findOne({email})
    if(!userData) throw new Error("invalid email")
    const isValid = await bcyptjs.compare(pass, userData.password)
    if(!isValid) throw new Error("invalid password")
    return userData
}
const jwt = require("jsonwebtoken")
userSchema.methods.generateToken = async function(){
    const user = this
    if(user.tokens.length==5)throw new Error("token exded")
    const token = jwt.sign( { _id: user._id } , "g22")
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}

const User = mongoose.model("User", userSchema)
module.exports = User


