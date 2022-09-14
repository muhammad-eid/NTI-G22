const mongoose = require("mongoose")
const validator = require("validator")
mongoose.connect("mongodb://localhost:27017/g22s8")
const User = mongoose.model("User", {
    name:{
        type:String,
        trin:true,
        required:true, 
        minlength:3,
        maxlength:10
    },
    age:{
        type:Number,
        min:21, 
        max:60,
        default:21,
        validate(value){
            if(!value) this.age=21
        }
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error("invalid email format")
        }
    },
    password:{
        type:String,
        trim:true,
        required:true,
        minlength:6,
        maxlength:20,
        match:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
        validate(value){
            //PassWord
            if(value.toLowerCase().includes("password")) throw new Error("invalid")
        }
    },
    gender:{
        type:String,
        trim:true,
        lowercase:true,
        enum:["male", "female"]
    },
    status:{
        type:Boolean,
        default:true
    },
    createdAt:{
        type:Date,
        default: Date.now()
    },
    image:{
        type:String
    }
})

const userData = new User({name:"nouran", email:"a@a.com", age:"", 
password:"a123hhggA"})
userData.save()
.then(res=>console.log(res))
.catch(e=> console.log(e.message))