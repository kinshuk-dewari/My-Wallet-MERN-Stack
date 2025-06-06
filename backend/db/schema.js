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
        minLength:3,
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
        minLength:3
    },
    phoneNumber:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        maxLength:10
    }
})

const accountSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    balanceInPaise: {
        type: Number, // to store ₹33.33 as 3333
        required: true
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
    amountInPaise: {
        type: Number, // to store ₹33.33 as 3333
        required: true
    }
})

const User = mongoose.model("User",userSchema);
const Merchant = mongoose.model("Merchant",merchantSchema);
const Transactions = mongoose.model("Transactions",transactionsSchema);
const Account = mongoose.model("Account",accountSchema)

module.exports={
    User,
    Merchant,
    Transactions,
    Account
};