const express = require('express');
const router = express.Router();
const {register,login,balance,transactions,report} = require('../controllers/user');

router.post('/register',register);
router.post('/login',login);
router.get('/balance',balance)
router.get('/transactions',transactions)
router.get('/report',report)

module.exports = router