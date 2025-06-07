const { z } = require("zod");
const mongoose = require("mongoose");
const { Account, Transactions } = require("../db/schema");

const transferBody = z.object({
  amount: z.number().positive(),
  to: z.string(),
});
exports.balance = async (req, res) => {
  const account = await Account.findOne({
    userId: req.userId,
  });
  if (!account) {
    return res.status(404).json({
      msg: "Account not found",
    });
  }
  // for converting the paise into integer rupees 5075 paise into Rs 50.75
  const finalBalance = (account.balanceInPaise / 100).toFixed(2);

  return res.status(200).json({
    balance: finalBalance,
  });
};

exports.transfer = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { success } = transferBody.safeParse(req.body);
    if (!success) {
      return res.status(411).json({
        msg: "wrong inputs",
      });
    }

    const { amount, to } = req.body;

    const amountInPaise = Math.round(amount * 100);

    // fetching account details
    const account = await Account.findOne({ userId: req.userId }).session(
      session
    );

    if (!account || account.balanceInPaise < amountInPaise) {
      await session.abortTransaction();
      return res.status(400).json({
        msg: "Insuffucient Balance",
      });
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
      await session.abortTransaction();
      return res.status(400).json({
        msg: "Invalid Account",
      });
    }

    // perform the transfer
    await Account.updateOne(
      { userId: req.userId },
      { $inc: { balanceInPaise: -amountInPaise } }
    ).session(session);

    await Account.updateOne(
      { userId: to },
      { $inc: { balanceInPaise: amountInPaise } }
    ).session(session);

    // log the transactions 
    await Transactions.create([{
        senderId:req.userId,
        reciever:to,
        amountInPaise:amountInPaise
    }],{session});

    // commit the transactioin
    await session.commitTransaction();
    return res.status(200).json({
      msg: "Transfer Successful",
    });
  } 
  catch (err) {
    await session.abortTransaction();
    return res.status(500).json({
       msg: "Internal Server Error",
       error: err.message,
       stack: err.stack,
    });
  }
  finally{
    session.endSession();
  }
};

exports.transactions = async (req, res) => {
  try{
    const userId = req.userId;

    const allTransactiions = await Transactions.find({
      $or:[
        {senderId:userId},
        {recieverId:userId},
      ]
    }).sort({_id:-1});

    const formattedTransactions = allTransactiions.map(transaction=>({
      // id:transaction._id,
      sender: transaction.senderId.toString(),
      receiver: transaction.recieverId.toString(),
      amount: (transaction.amountInPaise / 100).toFixed(2),
    }));

    return res.status(200).json({
      transactions:formattedTransactions
    });

  }catch(err){
    return res.status(500).json({
      msg:"Could not fetch the transactions",
      error:err.message
    });
  }
};
