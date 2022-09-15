const userModel = require("../database/models/user.model")
class User {
   static register = async(req,res) =>{
    try{
        const user = new userModel(req.body)
        await user.save()
        res.status(200).send({
            apiStatus: true,
            date: user,
            message: "user added successfully"
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus: false,
            date: e,
            message: e.message
        })
    }
   }
   static all = async(req,res) =>{
    try{
        const users = await userModel.find()
        res.status(200).send({
            apiStatus: true,
            date: users,
            message: "all data fetched"
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus: false,
            date: e,
            message: e.message
        })
    }
   }
   static single = async(req,res) =>{
    try{
        const users = await userModel.findById(req.params.id)
        res.status(200).send({
            apiStatus: true,
            date: users,
            message: "user data fetched"
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus: false,
            date: e,
            message: e.message
        })
    }
   }
   static deleteUser = async(req,res) =>{
    try{
        const users = await userModel.findByIdAndDelete(req.params.id)
        res.status(200).send({
            apiStatus: true,
            date: users,
            message: "user data fetched"
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus: false,
            date: e,
            message: e.message
        })
    }
   }
   static editUser = async(req,res) =>{
    try{
        const myUpdates = Object.keys(req.body)
        const allowedEdits = ["name", "age"]
        const validEdits = myUpdates.every(
            (update) => allowedEdits.includes(update)
            )
        if(!validEdits) throw new Error ("invalid edits")
        const user = await userModel.findById(req.params.id)
        if(!user) throw new Error("invalid id")
        myUpdates.forEach(update => user[update]= req.body[update])
        await user.save()
        res.status(200).send({
            apiStatus: true,
            date: user,
            message: "user data fetched"
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus: false,
            date: e,
            message: e.message
        })
    }
   }
   static editPass = async(req,res) =>{
    try{
        const user = await userModel.findById(req.params.id)
        if(!user) throw new Error("invalid id")
        const valid = await userModel.checkPass(user, req.body.oldPass)
        if(!valid)throw new Error ("invalid password")
        user.password= req.body.password
        await user.save()
        res.status(200).send({
            apiStatus: true,
            date: user,
            message: "user data fetched"
        })
    }
    catch(e){
        res.status(500).send({
            apiStatus: false,
            date: e,
            message: e.message
        })
    }
   }

}

module.exports = User