const {ObjectId} = require("mongodb")
const fs = require("fs")
const myConnection = require("./dbconnect")
class User{
    static index = (req,res)=>{
        myConnection(db=>{
            db.collection('users')
            .find()
            .toArray((e, result)=>{
                if(e) return console.log(e.message)
                res.render("home", {
                        pageTitle:"home page",
                        allUsers:result,
                        hasUsers : result.length
                    })
            })
        })
    }
    static add = (req,res)=>{
        res.render("add", {
            pageTitle:"add user"
        })
    }
    static addLogic = (req,res)=>{
        const user = { ...req.query }
        //db insert
        myConnection(db=>{
            db.collection('users')
            .insertOne(user)
            .then(r=> res.redirect("/"))
        })
    }
    static addPost = (req,res)=>{
        res.render("addpost", {
            pageTitle:"add user"
        })
    }
    static addPostLogic = (req,res)=>{
        // if(req.body.status) req.body.status=true el 
        // const user = req.body 
        myConnection(db=>{
            db.collection('users')
            .insertOne(req.body)
            .then(r=> res.redirect("/"))
        })
    }
    static single = (req,res)=>{
        myConnection(db=>{
            db.collection("users")
            .findOne({_id:new ObjectId(req.params.id)})
            .then(result=> 
                res.render("single", {
                    pageTitle: "single user",
                    user:result
                })    
                )
            .catch(e=> console.log(e.message))    
        })
    }
    static edit =(req,res)=>{
        myConnection(db=>{
            db.collection("users")
            .findOne({_id:new ObjectId(req.params.id)})
            .then(result=> 
                res.render("edit", {
                    pageTitle: "Edit user",
                    user:result
                })    
                )
            .catch(e=> console.log(e.message))    
        })
    }
    static editLogic = (req, res)=>{
        myConnection(db=>{
            db.collection("users")
            .updateOne(
                {_id:new ObjectId(req.params.id)},
                {$set: req.body}
                )
            .then(result=> 
                res.redirect('/')    
                )
            .catch(e=> console.log(e.message))    
        })
    }
    static del = (req, res)=>{
        myConnection(db=>{
            db.collection("users")
            .deleteOne(
                {_id:new ObjectId(req.params.id)}
                )
            .then(result=> 
                res.redirect('/')    
                )
            .catch(e=> console.log(e.message))    
        })    
    }
    static change = (req,res)=>{
        myConnection(db=>{
            db.collection("users").findOne({_id:new ObjectId(req.params.id)})
            .then(
                (user=>{
                    db.collection("users")
                    .updateOne(
                        {_id:new ObjectId(req.params.id)},
                        {$set: {status:!user.status}}
                        )
                    .then(result=> 
                        res.redirect('/')    
                        )
                    .catch(e=> console.log(e.message))    
        
                })
            )
        })

    }
}
module.exports = User