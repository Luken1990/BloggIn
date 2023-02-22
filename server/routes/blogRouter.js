const express = require('express');
const router = express.Router();
const {
  getBlogs,
  addBlog,
  deleteBlog,
  updateBlog
} = require('../controllers/blogController');

const { checkJWTToken, checkContentType } = require('../middleware/middleware');

//post request
router.post('/add', checkJWTToken, checkContentType, addBlog);

//put request
router.put('/:id', checkJWTToken, checkContentType, updateBlog);

//get request
router.get('/', checkJWTToken, getBlogs);
// router.get('/id', checkJWTToken, getBlog);

//delete request
router.delete('/:id', checkJWTToken, deleteBlog);

module.exports = router;
