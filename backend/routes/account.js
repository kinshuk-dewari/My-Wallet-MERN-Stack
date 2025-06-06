const express = require('express');

const router = express.Router();

const {balance,transactions,transfer} = require('../controllers/account');
const { authMiddleware } = require('../middlewares/middleware');

router.get('/balance',authMiddleware,balance);
router.get('/transactions',authMiddleware,transactions);

router.post('/transfer',authMiddleware,transfer);

module.exports = router