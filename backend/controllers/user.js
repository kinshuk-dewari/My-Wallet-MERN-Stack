const { z } = require("zod");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const { JWT_SECRET } = require('../config');

const {User, Account} = require("../db/schema")

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

const updateBody = z.object({
    password:z.string().optional(),
    firstName:z.string().optional(),
    lastName:z.string().optional(),
})

exports.trial = async(req,res)=>{
    return res.json({'msg':"user code is running "})
}

exports.register = async(req,res)=>{
    try{
        const {success} = signupBody.safeParse(req.body)
        if(!success) {
            return res.status(411).json({
                msg:"Incorect credentials"
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
        
        const hashedPass = await bcrypt.hash(req.body.password.trim(),10)
        console.log("stored hashed pass in db:",hashedPass)

        const user = await User.create({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            username:req.body.username,
            password:hashedPass,
            phoneNumber:req.body.phoneNumber
        })
        
        const userId = user._id;
        await Account.create({
            userId,
            balanceInPaise:1+Math.random()*10000,
        })

        const token = jwt.sign({userId},JWT_SECRET);

        return res.status(201).json({
            msg:"User created successfully",
            token:token
        })
        
    }
    catch(err){
        return res.status(500).json({
            msg:"Internal server error",
            error: err
        })
    }
    

}

exports.login = async (req, res) => {
    try {
        const parsedBody = signinBody.safeParse(req.body);

        if (!parsedBody.success) {
            return res.status(400).json({
                msg: "Incorrect login credentials"
            });
        }

        const { username, password } = parsedBody.data;

        const existingUser = await User.findOne({ username });

        if (!existingUser) {
            return res.status(403).json({
                msg: "User doesn't exist, please register first."
            });
        }

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                msg: "Invalid password"
            });
        }

        const token = jwt.sign({ userId: existingUser._id }, JWT_SECRET, { expiresIn: "1h" });

        return res.status(200).json({
            msg: "Login successful",
            token
        });

    } catch (err) {
        return res.status(500).json({
            msg: "Internal server error",
            error: err.message
        });
    }
}


exports.update = async(req,res)=>{
    const {success} = updateBody.safeParse(req.body);

    if(!success){
        return res.status(411).json({
            msg:"Error while updating information"
        })
    }

    const updateData = {...req.body};
    if(updateData.password){
        updateData.password = await bcrypt.hash(updateData.password,10);
    }

    try{
        const updated = await User.updateOne({_id:req.userId},{$set:updateData})
    
        if(updated.modifiedCount > 0){
            return res.status(200).json({
                msg:"Updated successfully"
            })
        }else{
            return res.status(411).json({
                msg:"Error while updating information"
            })
        }
    }catch(err){
        return res.status(411).json({
            msg:"Error while updating information"
        })
    }
} 

exports.bulk = async(req,res)=>{
    const filter = req.query.filter || "";

    const users = await User.find({
        $or:[
                {
                    firstName:{ $regex:filter, $options:"i" }
                },
                {
                    lastName:{ $regex:filter, $options:"i" }
                },
                {
                    phoneNumber:{ $regex:filter, $options:"i" }
                }
            ]
    })

    res.json({
        user:users.map(user=>({
            username:user.username,
            firstName:user.firstName,
            lastName:user.lastName,
            phoneNumber:user.phoneNumber,
            _id:user._id
        }))
    })
}





