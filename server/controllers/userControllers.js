const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');

//function to register user
const registerUser = asyncHandler(async (req, res) => {
  const { picture, name, email, password, socials } = req.body;

  //if one of the field is empty throw error status 400 and message
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please add all fields');
  }

  //check if user already in the database
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400);
    throw new Error('User already exist');
  }
 
  //create a hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  
  //create user
  const user = await User.create({
    picture,
    name,
    email,
    socials,
    password: hashPassword,
  });

  //if user created is successful send 200 status created
  if (user) {
    res.status(201).json({
      _id: user.id,
      picture: user.picture,
      name: user.name,
      email: user.email,
      socials: user.socials,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

//function to login
const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //check user email
  const user = await User.findOne({ email });

  //if user email and password match return user and token else throw error code
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      picture: user.picture,
      name: user.name,
      email: user.email,
      socials: user.socials,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid credentials');
  }
});

//find user by id in the database
const getUser = asyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id);

  res.status(200).json({
    id: _id,
    picture,
    name,
    email,
    socials,
  });
});

//generate jwt token
//sign token with the id passed in using the secret key
//expires in 3hour
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '3h' });
};

module.exports = {
  getUser,
  userLogin,
  registerUser,
};
