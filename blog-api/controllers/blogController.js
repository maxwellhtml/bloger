const Blog = require('../models/Blog');

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve blogs' });
  }
};

exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.slug);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve blog' });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const { title, slug, content } = req.body;
    const result = await Blog.create({ title, slug, content });
    res.status(201).json({ id: result.insertId, title, slug, content });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create blog' });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const { title, slug, content } = req.body;  // Ensure these fields are passed in the body
    const result = await Blog.update(req.params.id, { title, slug, content });
    
    // Check if the blog was found and updated
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    
    res.json({ message: 'Blog updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update blog' });
  }
};

exports.getBlogBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const blog = await Blog.findOne({ slug });

    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blog' });
  }
};


exports.deleteBlog = async (req, res) => {
  try {
    const result = await Blog.delete(req.params.id);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete blog' });
  }
};
