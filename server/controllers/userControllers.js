const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');

//POST operations-------------------------------------------

//function to register user
const registerUser = asyncHandler(async (req, res) => {
  const { picture, name, email, admin, password, github, linkedin, website } =
    req.body;

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
    admin,
    github,
    linkedin,
    website,
    password: hashPassword,
  });

  //if user created is successful send 200 status created
  if (user) {
    res.status(201).json({
      // _id: user.id,
      // picture: user.picture,
      // name: user.name,
      // email: user.email,
      // github: user.github,
      // linkedin: user.linkedin,
      // website: user.website,
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
      // _id: user.id,
      // picture: user.picture,
      // name: user.name,
      // email: user.email,
      // github: user.github,
      // linkedin: user.linkedin,
      // website: user.website,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid credentials');
  }
});

//GET operations-------------------------------------------

//find user by id in the database
const getUser = asyncHandler(async (req, res) => {
  const { _id, name, email, admin, picture, github, linkedin, website } =
    await User.findById(req.user.id);

  res.status(200).json({
    id: _id,
    picture,
    name,
    email,
    admin,
    github,
    linkedin,
    website,
  });
});

const getAuthor = asyncHandler(async (req, res) => {
  const { _id, name, picture } = await User.findById(req.params.id);

  res.status(200).json({
    picture,
    name,
  });
});

//PUT operations-------------------------------------------

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  await User.findByIdAndUpdate(user, req.body);

  res.status(200).json({ user });
});

//generate jwt token
//sign token with the id passed in using the secret key
//expires in 3hour
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '3h' });
};

module.exports = {
  registerUser,
  userLogin,
  getUser,
  getAuthor,
  updateUser,
};
