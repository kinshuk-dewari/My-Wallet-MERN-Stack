const express = require('express')
const userRouter = require('./user')
const merchantRouter = require('./merchant')
const accountRouter = require('./account')
const router = express.Router();

router.use('/user',userRouter);
router.use('/merchant',merchantRouter);
router.use('/account',accountRouter);

module.exports = router;