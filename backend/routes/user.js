const express = require('express');
const router = express.Router();

const {register,login,balance,transactions,trial} = require('../controllers/user');
const { authMiddleware } = require('../middlewares/middleware');

router.get('/',trial)
router.post('/register',register);
router.post('/login',login);
router.get('/balance',authMiddleware,balance)
router.get('/transactions',authMiddleware,transactions)

module.exports = router;
