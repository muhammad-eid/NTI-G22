const userModel = require("../database/models/user.model")
class User{
    static index = async(req,res)=>{
        try{
            const result = await userModel.find()
            res.render("home", {
                pageTitle:"home page",
                allUsers:result,
                hasUsers : result.length
            })
        }
        catch(e){
            res.send(e.message)
        }
        /*
        userModel.find()
        .then(result=>{
            res.render("home", {
                pageTitle:"home page",
                allUsers:result,
                hasUsers : result.length
            })
        })
        .catch(e=> res.send(e.message))
        */
    }
    static add = (req,res)=>{
        res.render("add", {
            pageTitle:"add user"
        })
    }
    static addLogic = async(req,res)=>{
        const userData = new userModel(req.query)
        try{
            await userData.save()
            res.redirect("/")
        }
        catch(e){
            
            res.render("add", {
                pageTitle:"add user",
                userData:req.query,
                e
            })
            // res.send(e)
        }
    }
    static addPost = (req,res)=>{
        res.render("addpost", {
            pageTitle:"add user"
        })
    }
    static addPostLogic = async(req,res)=>{
        try{
            const userData = new userModel(req.body)
            await userData.save()
            res.redirect("/")
        }
        catch(e){
            res.send(e)
        }
    }
    static single = async(req,res)=>{
        try{
            const result = await userModel.findById(req.params.id)
            res.render("single", {
                pageTitle: "single user",
                user:result
            })    
        }
        catch(e){
            res.send(e.message)
        }
    }
    static edit =async(req,res)=>{
        try{
            const result = await userModel.findById(req.params.id)
            res.render("edit", {
                pageTitle: "Edit user",
                user:result
            })    
        }
        catch(e){
            res.send(e.message)
        }
    }
    static editLogic = async(req, res)=>{
        try{
            const result = await userModel.findByIdAndUpdate(
                req.params.id, 
                req.body,
                {runValidators:true}
                )
            res.redirect("/")
        }
        catch(e){
            res.send(e.message)
        }
    }
    static del = async(req, res)=>{
        try{
            const result = await userModel.findByIdAndDelete(req.params.id)
            res.redirect("/")
        }
        catch(e){
            res.send(e.message)
        }
     
    }
    static change = async(req,res)=>{
        try{
            const result = await userModel.findById(req.params.id)
            result.status = !result.status
            await result.save()
            res.redirect("/")
        }
        catch(e){
            res.send(e.message)
        }
    
    }
    static addAddress = async(req,res)=>{
        try{
            const result = await userModel.findById(req.params.id)
            result.addresses.push(
                {  addrType:"home", addrDetails:"6 october" } 
            )
            await result.save()
            res.send(result)
        }
        catch(e){
            res.send(e)
        }

    }
    static getAddr = async(req,res)=>{
        try{
            const user = await userModel.findOne({
                "addresses._id" : req.params.addId,
            })
            res.send(user)
        }
        catch(e){
            res.send(e)
        }
    }
}
module.exports = User