const express = require("express")
const router = express.Router();
const blogsController = require("../../controllers/blogsController")

router.route('/')
  .get(blogsController.getAllBlogs)
  .post((req,res) => {
    res.json({
      message: "Insert a blog"
    })
  })
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
  .get((req,res) => {
    res.json({
      id: req.params.id
    })
  })


module.exports = router