const express = require('express');
const router = express.Router();

const {register,login,balance,transactions} = require('../controllers/user');

router.post('/register',register);
router.post('/login',login);
router.get('/balance',balance)
router.get('/transactions',transactions)

module.exports = router;
