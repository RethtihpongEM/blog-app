const Blog = require("../model/Blog");

//Get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    if (blogs.length == 0) {
      return res.status(204).json({ message: "No blogs found." });
    }
    res.json(blogs);
  } catch (err) {
    console.log(err);
    res.status(500).json({ 'message': err.message });
  }
};

//Insert blog
const insertBlog = async (req, res) => {
  //check if the title and body are not empty
  if (!req?.body?.title || !req?.body?.body) {
    return res.status(422).json({
      message: "Title and Body are required.",
    });
  }

  const data = {
    title: req?.body?.title,
    author: req?.body?.author,
    body: req?.body?.body,
  };

  //check for duplication
  if (await Blog.findOne({ title: req?.body?.title })) {
    return res.status(409).json({
      message: "This blog title is already exist",
    });
  }

  try {
    //insert to db
    const result = await Blog.create(data);
    res.status(201).json({
      message: "Blog is created",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ 'message': err.message });
  }
};

//Get one Blog
const getBlog = async (req, res) => {
  if (!req?.params?.id)
    return res.status(422).json({ message: "Blog ID required." });
  try {
    const blog = await Blog.findOne({ _id: req.params.id }).exec();
    if (!blog) {
      return res.status(204).json({ message: "No blog matches ID" });
    }
    res.json({
      data: blog,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ 'message': err.message });
  }
};

//Update Blog
const updateBlog = async (req,res) => {
  if (!req?.body?.id)
    return res.status(422).json({ message: "Blog ID required." });
  //Get the doc that needs to be updated
  const data = {
    title: req?.body?.title,
    author: req?.body?.author,
    body: req?.body?.body,
  };
  try{
    //Update Blog
    await Blog.findOneAndUpdate({_id: req.body.id}, data)
    res.json({
      message: "Blog is updated.",
      data: data
    })
  }catch(err){
    console.log(err)
    res.status(500).json({ 'message': err.message });
  }
}

const deleteBlog = async (req,res) => {
  if (!req?.body?.id)
    return res.status(422).json({ message: "Blog ID required." });
  try{
    const result = await Blog.deleteOne({_id: req?.body?.id})
    if(result.deletedCount < 1){
      return res.json({
        message: "Blog not found."
      })
    }
    res.json({
      message: "Blog is deleted."
    })
  }catch(err){
    console.log(err)
    res.status(500).json({ 'message': err.message });
  }
}

module.exports = {
  getAllBlogs,
  getBlog,
  insertBlog,
  updateBlog,
  deleteBlog
};
