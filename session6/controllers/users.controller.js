const fs = require("fs")

class User{
    static index = (req,res)=>{
        let allUsers 
        try{
            allUsers = JSON.parse(fs.readFileSync('data.json'))||[]
        }
        catch(e){
            allUsers = []
        }
        res.render("home", {
            pageTitle:"home page",
            slides: ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"],
            allUsers,
            // noUsers : allUsers.length==0? true: false
            hasUsers : allUsers.length
        })
    }
    static add = (req,res)=>{
        // if(req.query.name && req.query.email && req.query.age){
        //     return res.send(req.query)
        // }
        res.render("add", {
            pageTitle:"add user"
        })
    }
    static addLogic = (req,res)=>{
        // let user = req.query
        // user.id = Date.now()
        const user = { id:Date.now(), ...req.query }
        let allUsers 
        try{
            allUsers = JSON.parse(fs.readFileSync('data.json'))||[]
        }
        catch(e){
            allUsers = []
        }
        allUsers.push(user)
        fs.writeFileSync("data.json", JSON.stringify(allUsers))
        res.redirect('/')
    }
    static addPost = (req,res)=>{
        res.render("addpost", {
            pageTitle:"add user"
        })
    }
    static addPostLogic = (req,res)=>{
        const user = { id:Date.now(), ...req.body }
        let allUsers 
        try{
            allUsers = JSON.parse(fs.readFileSync('data.json'))||[]
        }
        catch(e){
            allUsers = []
        }
        allUsers.push(user)
        fs.writeFileSync("data.json", JSON.stringify(allUsers))
        res.redirect('/')
    }
    static single = (req,res)=>{
        let allUsers 
        try{
            allUsers = JSON.parse(fs.readFileSync('data.json'))||[]
        }
        catch(e){
            allUsers = []
        }
        let user = allUsers.find(user => user.id == req.params.id)
        res.render("single", {
            pageTitle: "single user",
            user
        })
    }
    static edit =(req,res)=>{
        let allUsers 
        try{
            allUsers = JSON.parse(fs.readFileSync('data.json'))||[]
        }
        catch(e){
            allUsers = []
        }
        let user = allUsers.find(user => user.id == req.params.id)
        res.render("edit", {
            pageTitle:"edit user",
            user
        })
    }
    static editLogic = (req, res)=>{
        let allUsers 
        try{
            allUsers = JSON.parse(fs.readFileSync('data.json'))||[]
        }
        catch(e){
            allUsers = []
        }
        let user = allUsers.findIndex(user => user.id == req.params.id)
        allUsers[user]={id:req.params.id,...req.body}
        fs.writeFileSync("data.json", JSON.stringify(allUsers))
        res.redirect(`/single/${req.params.id}`)
    }
    static del = (req, res)=>{
        let allUsers 
        try{
            allUsers = JSON.parse(fs.readFileSync('data.json'))||[]
            let userId = allUsers.findIndex(user => user.id == req.params.id)
            if(userId!=-1) {
                allUsers.splice(userId, 1)
                fs.writeFileSync("data.json", JSON.stringify(allUsers))
            }    
        }
        catch(e){
            allUsers = []
        }
        res.redirect('/')
    }
}
module.exports = User