import {z} from "zod";
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const { JWT_SECRET } = require('../config');

const {Merchant} = require('../db/schema')

const signupBody=z.object({
    firstName:z.string(),
    lastName:z.string(),
    username:z.string().email(),
    password:z.string(),
    phoneNumber:z.string()
})
const signinBody=z.object({    
    username:z.string().email(),
    password:z.string()
})

exports.trial = async(req,res)=>{
    return res.json({'msg':"merchant code is running "})
}

exports.register = async(req,res)=>{
    try{
        const {success}= signupBody.safeParse(req.body)
        if(!success){
            return res.status(411).json({
                msg:"Incorect credentials"
            })
        }
        const existingMerchant = Merchant.findOne({
            username:req.body.username
        })
        if(existingMerchant){
            return res.status(411).json({
                msg:"Email already exists"
            })
        }
        const hashedPass = await bcrypt.hash(req.body.password,10)

        const merchant = await Merchant.create({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            username:req.body.username,
            password:hashedPass,
            phoneNumber:req.body.phoneNumber
        })

        const merchantID = merchant._id;

        const token = jwt.sign({merchantID},JWT_SECRET)

        return res.status(200).json({
            msg:"Merchant created successfully",
            token:token
        })

    }catch(err){
        return res.status(201).json({
            msg:"Merchant created successfully",
            token:token
        })
    }
}

exports.login = async(req,res)=>{
    const {success} = signupBody.safeParse(req.body)

    if(!success){
        return res.status(411).json({
            msg:"Incorrect credentials"
        })
    }

    const existingMerchant = await Merchant.findOne({
        username:req.body.username
    })

    if(!existingMerchant){
        return res.status(403).json({
            msg:"Merchant doesn't exists, register as merchant first."
        })
    }

    const checkPass = await bcrypt.compare(req.body.pass,existingMerchant.password);

    if(!checkPass){
        return res.status(401).json({
            msg:"Invalid Password"
        })
    }

    const token = jwt.sign({merchantID:existingMerchant._id},JWT_SECRET);

    res.status(200).json({
        msg:"Login Successful",
        token:token
    })

}

exports.balance = async(req,res)=>{
    

}
exports.transactions = async(req,res)=>{
    

}
exports.report = async(req,res)=>{
    
}



