const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const { JWT_SECRET } = require('../config');


exports.register = async(req,res)=>{
    const {username,password,phone_number,name} = req.body;

    


}
exports.login = async(req,res)=>{
    const {username,password} = req.body;

    


}
exports.balance = async(req,res)=>{
    

}
exports.transactions = async(req,res)=>{
    

}




