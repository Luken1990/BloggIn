const express = require('express');
const router = express.Router();

const {
  userLogin,
  getUser,
  registerUser,
} = require('../controllers/userControllers');

//imported middleware to check JWT toke and password
const { checkJWTToken } = require('../middleware/middleware');

//post request
router.post('/login', userLogin);
router.post('/register', registerUser);

//get request
router.get('/', checkJWTToken, getUser);

module.exports = router;
