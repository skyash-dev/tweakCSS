const router = require('express').Router();
const { protect } = require("../modules/jwt");

const userController = require('../controllers/userController');
const { login, signup, userDetails } = userController;

router.post('/login', login);
router.post('/signup', signup);
router.get('/userdetails', protect, userDetails);

module.exports = router;