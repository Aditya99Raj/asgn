var mongoose = require("mongoose");

var postSchema = mongoose.Schema(
    {
       title:{type:String, required:true,default:true},
       desc:{type:String, required:true,default:true},
       image:{type:String, required:true,default:true}

    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Post", postSchema)