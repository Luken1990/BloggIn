const express = require('express');
const router = express.Router();
// const multer = require('multer');

const {
  getAllBlogs,
  getBlogs,
  getBlog,
  addBlog,
  deleteBlog,
  updateBlog,
  updateLikes,
} = require('../controllers/blogController');

const { checkJWTToken, checkContentType } = require('../middleware/middleware');

//post request
router.post('/add', checkJWTToken, addBlog);

//put request
router.put('/:id', checkJWTToken, updateBlog);

//patch request
router.patch('/:id', checkJWTToken, updateLikes);

//get request
router.get('/all', getAllBlogs);

//user get request
router.get('/', checkJWTToken, getBlogs);
router.get('/:id', getBlog);

//delete request
router.delete('/:id', checkJWTToken, deleteBlog);

module.exports = router;
