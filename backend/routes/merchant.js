const express = require('express');

const router = express.Router();

const {register,login,balance,transactions,report,trial} = require('../controllers/merchant');
const { authMiddleware } = require('../middlewares/middleware');

router.post('/register',register);
router.post('/login',login);
router.get('/balance',authMiddleware,balance)
router.get('/transactions',authMiddleware,transactions)
router.get('/report',authMiddleware,report)
router.get('/',trial)

module.exports = router