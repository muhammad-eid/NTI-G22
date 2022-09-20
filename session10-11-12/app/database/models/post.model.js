const mongoose = require("mongoose")
const blogSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    postType:{
        type:String,
        enum:["file", "txt"]
    },
    txt:{
        type:String,
        trim:true,
        required: function(){return this.postType=="txt"}
    },
    content:{
        type:String,
        trim:true,
        required: function(){return this.postType!="txt"}
    }
})
const Blog = mongoose.model("Blog",blogSchema)
module.exports = Blog