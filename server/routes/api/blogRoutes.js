const express = require("express")
const router = express.Router();
const blogsController = require("../../controllers/blogsController")

router.route('/')
  .get(blogsController.getAllBlogs)
  .post(blogsController.insertBlog)
  .delete((req,res) => {
    res.json({
      message: "Delete a blog"
    })
  })
  .put((req,res) => {
    res.json({
      message: "Update blog"
    })
  })


router.route('/:id')
  .get(blogsController.getBlog)


module.exports = router