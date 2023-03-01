const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploadMiddleWare = multer({ dest: 'uploads/' });

const {
  getAllBlogs,
  getBlogs,
  getBlog,
  addBlog,
  deleteBlog,
  updateBlog,
} = require('../controllers/blogController');

const { checkJWTToken, checkContentType } = require('../middleware/middleware');

//post request
router.post('/add', checkJWTToken, uploadMiddleWare.single('image'), addBlog);

//put request
router.patch('/:id', checkJWTToken, uploadMiddleWare.single('image'), updateBlog);

//get request
router.get('/all', getAllBlogs);

//user get request
router.get('/', checkJWTToken, getBlogs);
router.get('/:id', getBlog);

//delete request
router.delete('/:id', checkJWTToken, deleteBlog);

module.exports = router;
