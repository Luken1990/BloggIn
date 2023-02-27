const express = require('express');
const router = express.Router();

const {
  userLogin,
  registerUser,
  getUser,
  getAuthor,
  updateUser,
} = require('../controllers/userControllers');

//imported middleware to check JWT toke and password
const { checkJWTToken } = require('../middleware/middleware');

//post request
router.post('/login', userLogin);
router.post('/register', registerUser);

//put request
router.put('/update', checkJWTToken, updateUser);

//get request
router.get('/', checkJWTToken, getUser);
router.get('/:id', getAuthor);

module.exports = router;
