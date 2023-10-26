const express = require("express")
const router = express.Router();
const blogsController = require("../../controllers/blogsController")




router.route('/')
  .get(blogsController.getAllBlogs)
  .post(blogsController.insertBlog)
  .delete(blogsController.deleteBlog)
  .put(blogsController.updateBlog)


router.route('/:id')
  .get(blogsController.getBlog)


module.exports = router