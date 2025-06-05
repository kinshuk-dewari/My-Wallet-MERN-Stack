const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        maxLength:50
    },
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
    phoneNumber:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        maxLength:10
    }
})

const merchantSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        minLength:3,
        maxLength:50
    },
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
    phoneNumber:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        maxLength:10
    }
})

const accountsSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    balance:{
        type:Number,
        required:true
    },
    decimal:{
        type:Number,
        required:true
    }
})

const transactionsSchema = new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    reciever:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    decimal:{
        type:Number,
        required:true
    },
})

const User = mongoose.model("User",userSchema);
const Merchant = mongoose.model("Merchant",merchantSchema);
const Transactions = mongoose.model("Transactions",transactionsSchema);
const Accounts = mongoose.model("Accounts",accountsSchema)

module.exports={
    User,
    Merchant,
    Transactions,
    Accounts
};