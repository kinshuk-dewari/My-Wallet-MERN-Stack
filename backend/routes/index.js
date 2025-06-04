const express = require('express')
const userRouter = require('./user')
const merchantRouter = require('./merchant')
const router = express.Router();

router.use('/user',userRouter);
router.use('/merchant',merchantRouter);

module.exports = router;