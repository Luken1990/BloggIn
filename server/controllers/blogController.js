const Blog = require('../models/blogSchema');
const User = require('../models/userSchema');
const asyncHandler = require('express-async-handler');
const fs = require('fs');

const addBlog = asyncHandler(async (req, res) => {
  const { originalname, path } = req.file;
  const parts = originalname.split('.');
  const ext = parts.at(-1);
  const newPath = `${path}.${ext}`;
  fs.renameSync(path, newPath);

  const newBlog = new Blog({
    image: newPath,
    title: req.body.title,
    heading: req.body.heading,
    text: req.body.text,
    tags: req.body.tags,
    likes: req.body.likes,
    user: req.user.id,
  });

  const blog = await newBlog.save();
  res.status(200).json(blog);
});

const getAllBlogs = asyncHandler(async (req, res) => {
  const blog = await Blog.find();
  res.status(200).json(blog);
});

//find using id status 200 ok
const getBlogs = asyncHandler(async (req, res) => {
  const blog = await Blog.find({ user: req.user.id });
  res.status(200).json(blog);
});

const getBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.status(200).json(blog);
});

const updateBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

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

  //if the todo item user id does not match the user id throw error (401) (unauthorized)
  if (blog.user.toString() !== user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  //find todo by id then update it
  const update = await Blog.findByIdAndUpdate(blog, req.body);
  res.status(200).json(update);
});

const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  //if todo was not found return status 400 bad request
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

  //if the todo item user id does not match the user id throw error (401) (unauthorized)
  if (blog.user.toString() !== user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  //remove todo
  await blog.remove();
  res.status(200).send({ message: 'Blog deleted' });
});

module.exports = {
  getAllBlogs,
  getBlogs,
  getBlog,
  addBlog,
  updateBlog,
  deleteBlog,
};
