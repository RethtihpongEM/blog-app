const getAllBlogs = (req,res) => {
  res.json({
    message: 'Get all blogs'
  })
}

module.exports = {
  getAllBlogs
}