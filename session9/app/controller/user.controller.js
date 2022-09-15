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
}

module.exports = User