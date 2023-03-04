const Blog = require('../models/blogSchema');
const User = require('../models/userSchema');
const asyncHandler = require('express-async-handler');
const fs = require('fs');

//POST operations-------------------------------------------

const addBlog = asyncHandler(async (req, res) => {
  const { originalname, path } = req.file;
  const parts = originalname.split('.');
  const ext = parts.at(-1);
  const newPath = `${path}.${ext}`;
  fs.renameSync(path, newPath);

  const newBlog = new Blog({
    image: newPath,
    heading: req.body.heading,
    text: req.body.text,
    tags: req.body.tags,
    likes: req.body.likes,
    user: req.user.id,
  });

  const blog = await newBlog.save();
  res.status(200).json(blog);
});

//GET operations-------------------------------------------

//get all blog from database
const getAllBlogs = asyncHandler(async (req, res) => {
  const blog = await Blog.find().populate('user', 'picture name email');
  res.status(200).json(blog);
});

//find all users blogs
const getBlogs = asyncHandler(async (req, res) => {
  const blog = await Blog.find({ user: req.user.id });
  res.status(200).json(blog);
});

//get blog that match the id
const getBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.status(200).json(blog);
});

//PUT operations-------------------------------------------

const updateBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  let newPath = null;
  const { heading, text, tags, likes } = req.body;

  //check if blog exist
  if (!blog) {
    res.status(400);
    throw new Error('Blog not found');
  }

  //find user by id
  const user = await User.findById(req.user.id);

  //check if user is in database if not throw error 401 (unauthorized)
  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  //if there is a file
  if (req.file) {
    const { originalname, path } = req.file;
    const parts = originalname.split('.');
    const ext = parts.at(-1);
    newPath = `${path}.${ext}`;
    fs.renameSync(path, newPath);
  }

  //if user id match or user is admin edit blog else throw 401 error
  if (blog.user.toString() === user.id || user.admin === true) {
    const update = await Blog.findByIdAndUpdate(blog, {
      image: newPath ? newPath : blog.image,
      heading,
      text,
      tags,
      likes,
    });
    res.status(200).json(update);
  } else {
    res.status(401);
    throw new Error('User not authorized');
  }
});

//PATCH operations-------------------------------------------

const updateLikes = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (
    blog.likes.filter((item) => item.user.toString() === req.user.id).length > 0
  ) {
    res.status(400);
    throw new Error('User have already liked');
  }

  blog.likes.unshift({ user: req.user.id });
  await blog.save();
  res.json(blog);
});

//DELETE operations-------------------------------------------

const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  //if blog was not found return status 400 bad request
  //send message not found
  if (!blog) {
    res.status(400);
    res.send(400).send({ message: 'Blog not found' });
  }

  //find user by id
  const user = await User.findById(req.user.id);

  //check if user is in database if not throw error 401 (unauthorized)
  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  //if user id match or user is admin delete  else throw error
  if (blog.user.toString() === user.id || user.admin === true) {
    await blog.remove();
    res.status(200).send({ message: 'Blog deleted' });
  } else {
    res.status(401);
    throw new Error('User not authorized');
  }
});

module.exports = {
  getAllBlogs,
  getBlogs,
  getBlog,
  addBlog,
  updateBlog,
  updateLikes,
  deleteBlog,
};
