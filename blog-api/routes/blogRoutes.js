const express = require('express');
const blogController = require('../controllers/blogController');
const router = express.Router();

// Routes for Blog API
router.get('/blogs', blogController.getAllBlogs);
router.get('/blogs/:slug', blogController.getBlogById);
router.post('/blogs', blogController.createBlog);
router.put('/blogs/:id', blogController.updateBlog); // Corrected from `router.update` to `router.put`
router.delete('/blogs/:id', blogController.deleteBlog);

module.exports = router;
