const mongoose = require("mongoose")
const blogSchema = mongoose.Schema({
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
const Blog = mongoose.model(blogSchema)
module.exports = Blog