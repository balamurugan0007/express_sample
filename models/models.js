const { UUID } = require('mongodb')
const mongoose=require('mongoose')

const Usermodel= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    city:{
        type:String,
        required:true,
    },
    age:{
        type:Number,

    },
    phone:{
        type:Number,
        required:true
    },
    id:{
        type:UUID,
        required:true,
    }
}) 


const User=mongoose.model("User",Usermodel)

module.exports=User;