const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const { JWT_SECRET } = require('../config');


exports.trial = async(req,res)=>{
    return res.json({'msg':"merchant code is running "})
}

exports.register = async(req,res)=>{
    const {success}= sig
    const {username,password,phone_number,name} = req.body;

    


}
exports.login = async(req,res)=>{
    const {username,password} = req.body;

    


}
exports.balance = async(req,res)=>{
    

}
exports.transactions = async(req,res)=>{
    

}
exports.report = async(req,res)=>{
    
}



