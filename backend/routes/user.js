const express = require('express');
const router = express.Router();

const {register,login,trial,update,bulk} = require('../controllers/user');
const { authMiddleware } = require('../middlewares/middleware');

router.get('/',trial)
router.post('/register',register);
router.post('/login',login);

router.put('/update',authMiddleware,update)

router.get('/bulk',authMiddleware,bulk)

module.exports = router;
