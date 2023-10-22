const Blog = require("../model/Blog");

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    if (blogs.length == 0) {
      return res.status(204).json({ message: "No blogs found." });
    }
    res.json({
      data: blogs,
      total: blogs.length,
    });
  } catch (err) {
    console.log(err);
  }
};

const insertBlog = async (req, res) => {
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

  if (await Blog.findOne({ title: req?.body?.title })) {
    return res.status(409).json({
      message: "This blog title is already exist",
    });
  }

  try {
    const result = await Blog.create(data);
    res.status(201).json({
      message: "Blog is created",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

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
  }
};

module.exports = {
  getAllBlogs,
  getBlog,
  insertBlog,
};
