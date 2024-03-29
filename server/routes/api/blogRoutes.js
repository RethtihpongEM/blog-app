const express = require("express")
const router = express.Router();
const blogsController = require("../../controllers/blogsController")
const verifyJWT = require("../../middleware/verifyJWT")




router.route('/')
  .get(blogsController.getAllBlogs)
  .post(verifyJWT,blogsController.insertBlog)
  .delete(verifyJWT,blogsController.deleteBlog)
  .put(verifyJWT,blogsController.updateBlog)


router.route('/:id')
  .get(blogsController.getBlog)


module.exports = router