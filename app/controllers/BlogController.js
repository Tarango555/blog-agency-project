import {
    CreateBlogService,
    UpdateBlogService,
    DeleteBlogService,
    GetAllBlogsService,
    PublishedBlogsService,
    DraftedBlogsService,
    BlogBySlugService,
    DashboardStatsService,
    RecentBlogsService
  } from '../services/BlogService.js';
  
  // Controller for creating a new blog post
  export const CreateBlog = async (req, res) => {
    try {
      const result = await CreateBlogService(req);
      return res.status(result.statusCode).json(result);
    } catch (err) {
      return res.status(500).json({ status: 'fail', message: err.toString() });
    }
  };

  // Controller for updating a blog post
export const UpdateBlog = async (req, res) => {
  try {
      const result = await UpdateBlogService(req);
      return res.status(result.statusCode).json(result);
  } catch (err) {
      return res.status(500).json({ status: "fail", message: err.toString() });
  }
};

// Delete a blog post
export const DeleteBlog = async (req, res) => {
  try {
      const result = await DeleteBlogService(req);
      return res.status(result.statusCode).json(result);
  } catch (err) {
      return res.status(500).json({ status: "fail", message: err.toString() });
  }
};
  
// Controller for fetching all published blog posts
export const GetAllBlogs = async (req, res) => {
  try {
    const result = await GetAllBlogsService();
    return res.status(result.statusCode).json(result);
  } catch (err) {
    return res.status(500).json({ status: 'fail', message: err.toString() });
  }
};

// Controller for fetching all published blog posts
export const PublishedBlogs = async (req, res) => {
  try {
    const result = await PublishedBlogsService();
    return res.status(result.statusCode).json(result);
  } catch (err) {
    return res.status(500).json({ status: 'fail', message: err.toString() });
  }
};

// Controller for fetching all published blog posts
export const DraftedBlogs = async (req, res) => {
  try {
    const result = await DraftedBlogsService();
    return res.status(result.statusCode).json(result);
  } catch (err) {
    return res.status(500).json({ status: 'fail', message: err.toString() });
  }
};
  
// Controller for fetching a blog post by slug
export const BlogBySlug = async (req, res) => {
  try {
    const result = await BlogBySlugService(req.params.slug);
    return res.status(result.statusCode).json(result);
  } catch (err) {
    return res.status(500).json({ status: 'fail', message: err.toString() });
  }
};

export const DashboardStats = async (req, res) => {
  try {
    const result = await DashboardStatsService();
    return res.status(result.statusCode).json(result);
  } catch (err) {
    return res.status(500).json({ status: "fail", message: err.toString() });
  }
};

export const RecentBlogs = async (req, res) => {
  try {
    const result = await RecentBlogsService();
    return res.status(result.statusCode).json(result);
  } catch (err) {
    return res.status(500).json({ status: "fail", message: err.toString() });
  }
};
