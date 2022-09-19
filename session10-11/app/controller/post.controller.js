const postModel = require("../database/models/post.model")
class Post{
    static create = async(req,res)=>{
        try{
            const postData = new postModel({...req.body, userId: req.user._id})
            await postData.save()
            res.status(200).send({apiStatus:true, data:postData, message:"added"})
        }
        catch(e){
            res.status(500).send({apiStatus:false, data:e, message:e.message})
        }
    }
    static userPosts = async(req,res)=>{
        try{
            await req.user.populate("myPosts")
            res.status(200).send({
                data:req.user.myPosts,
                message:"data fetched",
                apiStatus:true
            })
        }
        catch(e){
            res.status(500).send({apiStatus:false, data:e, message:e.message})
        }
    }
}
module.exports = Post