import express from 'express';
const router = express.Router();

//Import controllers
import * as AdminController from '../app/controllers/AdminController.js';
import * as RefreshTokenController from '../app/controllers/RefreshTokenController.js';
import * as BlogController from '../app/controllers/BlogController.js';
import { verifyAccessToken } from '../app/middlewares/verifyAccessToken.js';

//RefreshToken route
router.post('/RefreshToken', RefreshTokenController.RefreshToken);

//Admin login route
router.post('/AdminLogin', AdminController.AdminLogin);

// Admin Logout Route
router.post('/AdminLogout', AdminController.AdminLogout);

// Get admin profile details
router.get('/AdminProfile', verifyAccessToken, AdminController.AdminProfile);

// Update admin profile
router.put('/UpdateAdminProfile', verifyAccessToken, AdminController.UpdateAdminProfile);

// Protected routes for blog CRUD operations
router.post('/CreateBlog', verifyAccessToken, BlogController.CreateBlog); // Create a new blog
router.put('/UpdateBlog/:id', verifyAccessToken, BlogController.UpdateBlog);  // Update a blog
router.delete('/DeleteBlog/:id', verifyAccessToken, BlogController.DeleteBlog);  // Delete a blog

// Route to get all blog posts
router.get('/GetAllBlogs', BlogController.GetAllBlogs);

// Route to get all published blog posts
router.get('/PublishedBlogs', BlogController.PublishedBlogs);

// Route to get all drafted blog posts
router.get('/DraftedBlogs', BlogController.DraftedBlogs);

// Route to get a specific blog post by slug
router.get('/BlogBySlug/:slug', BlogController.BlogBySlug); 

// Dashboard stats for analytics
router.get('/DashboardStats', verifyAccessToken, BlogController.DashboardStats);

// Recently created blogs
router.get('/RecentBlogs', verifyAccessToken, BlogController.RecentBlogs);

export default router;