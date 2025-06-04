import {z} from "zod"
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const { JWT_SECRET } = require('../config');


const {User} = require("../db/schema")

const signupBody = z.object({
    firstName:z.string(),
    lastName:z.string(),
    username:z.string().email(),
    password:z.string(),
    phoneNumber:z.string()
})

const signinBody = z.object({
    username:z.string().email(),
    password:z.string(),
})

exports.trial = async(req,res)=>{
    return res.json({'msg':"user code is running "})
}

exports.register = async(req,res)=>{
    try{
        const {success} = signupBody.safeParse(req.body)
        if(!success) {
            return res.status(411).json({
                msg:"Incorrect Inputs"
            })
        }

        const existingUser = await User.findOne({
            username:req.body.username
        })

        if(existingUser){
            return res.status(411).json({
                msg:"Email already exists"
            })
        }

        const hashedPass = await bcrypt.hash(req.body.password,10)

        const user = await User.create({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            username:req.body.username,
            password:hashedPass,
            phoneNumber:req.body.phoneNumber
        })
        
        const userId = user._id;

        const token = jwt.sign({userId},JWT_SECRET);

        res.status(200).json({
            msg:"User created successfully",
            token:token
        })
        
    }
    catch(err){
        res.status(500).json({
            msg:"Internal server error",
            error: err
        })
    }
    

}

exports.login = async(req,res)=>{
    try{
        const {success} = signinBody.safeParse(req.body);

        if(!success){
            res.status(411).json({
                msg:"Incorect Login credentials"
            })
        }

        const existingUser = await User.findOne({
            username:req.body.username
        })

        if(!existingUser){
            res.status(403).json({
                msg:"User doesn't exists, register first."
            })
        }

        const checkPass = await bcrypt.compare(req.body.password, existingUser.password)
        if(!checkPass){
            res.status(403).json({
                msg:"Invalid Password"
            })
        }

        const token = jwt.sign({userId:existingUser._id},JWT_SECRET);

        return res.status(200).json({
            msg:"Login Successful",
            token:token
        })
        
    }catch(err){
        res.status(500).json({
            msg:"Internal server error",
            error: err
        })
    } 


}

exports.balance = async(req,res)=>{
    

}
exports.transactions = async(req,res)=>{
    

}




