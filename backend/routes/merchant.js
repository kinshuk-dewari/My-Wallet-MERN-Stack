const express = require('express');
const router = express.Router();
const {register,login,balance,transactions,report,trial} = require('../controllers/merchant');

router.post('/register',register);
router.post('/login',login);
router.get('/balance',balance)
router.get('/transactions',transactions)
router.get('/report',report)
router.get('/',trial)

module.exports = router