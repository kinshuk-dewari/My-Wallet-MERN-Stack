const {Account} = require('../db/schema')

exports.balance = async(req,res)=>{
    const account = await Account.findOne({
        userId:req.userId
    });
    if(!account){
        return res.status(404).json({
            msg:"Account not found"
        })
    }
    // for converting the paise into integer rupees 5075 paise into Rs 50.75
    const finalBalance = (account.balanceInPaise/100).toFixed(2);

    return res.status(200).json({
        balance:finalBalance
    })
}