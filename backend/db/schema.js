const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:3,
        maxLength:30
    },
    password:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:3,
        maxLength:30
    },
    name:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
    phone_number:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        maxLength:10
    }
})

const User = mongoose.model("User",userSchema);

module.exports={
    User
};