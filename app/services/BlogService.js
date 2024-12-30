import BlogModel from '../models/BlogModel.js';

// Service to create a new blog post
export const CreateBlogService = async (req) => {
  try {
    
    // Use the admin's _id (from req.user) as the author field in the blog post [Dynamic way]
    req.body.author = req.user._id;

    const blog = await BlogModel.create(req.body);
    return {
      statusCode: 201,
      status: 'success',
      message: 'Blog created successfully',
      data: blog,
    };
  } catch (err) {
    return {
      statusCode: 400,
      status: 'fail',
      message: err.toString(),
    };
  }
};

// Update Blog Service
export const UpdateBlogService = async (req) => {
  try {
      const updatedBlog = await BlogModel.findByIdAndUpdate(req.params.id, req.body, { new: true });  //{new: true} returns the updated data
      if (!updatedBlog) {
          return { statusCode: 404, status: "fail", message: "Blog not found" };
      }
      return {
          statusCode: 200,
          status: "success",
          message: "Blog updated successfully",
          data: updatedBlog,
      };
  } catch (err) {
      return { statusCode: 400, status: "fail", message: err.toString() };
  }
};

// Delete Blog Service
export const DeleteBlogService = async (req) => {
  try {
      const deletedBlog = await BlogModel.findByIdAndDelete(req.params.id); // this 'id' is from api router. /:id
      if (!deletedBlog) {
          return { statusCode: 404, status: "fail", message: "Blog not found" };
      }
      return { statusCode: 200, status: "success", message: "Blog deleted successfully" };
  } catch (err) {
      return { statusCode: 400, status: "fail", message: err.toString() };
  }
};

// Service to fetch all blogs
export const GetAllBlogsService = async () => {
  try {
    const getAllBlogs = await BlogModel.find();
    return {
      statusCode: 200,
      status: 'success',
      message: 'All blogs retrieved successfully',
      data: getAllBlogs,
    };
  } catch (err) {
    return {
      statusCode: 400,
      status: 'fail',
      message: err.toString(),
    };
  }
};

// Service to fetch all published blogs
export const PublishedBlogsService = async () => {
  try {
    const publishedBlogs = await BlogModel.find({ status: 'published' });
    return {
      statusCode: 200,
      status: 'success',
      message: 'Published blogs retrieved successfully',
      data: publishedBlogs,
    };
  } catch (err) {
    return {
      statusCode: 400,
      status: 'fail',
      message: err.toString(),
    };
  }
};

// Service to fetch all drafted blogs
export const DraftedBlogsService = async () => {
  try {
    const draftedBlogs = await BlogModel.find({ status: 'draft' });
    return {
      statusCode: 200,
      status: 'success',
      message: 'Drafted blogs retrieved successfully',
      data: draftedBlogs,
    };
  } catch (err) {
    return {
      statusCode: 400,
      status: 'fail',
      message: err.toString(),
    };
  }
};

// Service to fetch a blog post by its slug
export const BlogBySlugService = async (slug) => {
  try {
    const blog = await BlogModel.findOne({ slug });
    if (!blog) {
      return {
        statusCode: 404,
        status: 'fail',
        message: 'Blog not found',
      };
    }
    return {
      statusCode: 200,
      status: 'success',
      message: 'Blog retrieved successfully',
      data: blog,
    };
  } catch (err) {
    return {
      statusCode: 400,
      status: 'fail',
      message: err.toString(),
    };
  }
};

export const DashboardStatsService = async () => {
  try {
    const totalBlogs = await BlogModel.countDocuments();
    const publishedBlogs = await BlogModel.countDocuments({ status: 'published' });
    const draftBlogs = await BlogModel.countDocuments({ status: 'draft' });

    return {
      statusCode: 200,
      status: "success",
      message: "Dashboard statistics retrieved successfully",
      data: { totalBlogs, publishedBlogs, draftBlogs }
    };
  } catch (err) {
    return { statusCode: 500, status: "fail", message: err.toString() };
  }
};

export const RecentBlogsService = async () => {
  try {
    const recentBlogs = await BlogModel.find()
      .sort({ createdAt: -1 })
      .limit(5); // Retrieve 5 most recent blogs

    return {
      statusCode: 200,
      status: "success",
      message: "Recent blogs retrieved successfully",
      data: recentBlogs
    };
  } catch (err) {
    return { statusCode: 500, status: "fail", message: err.toString() };
  }
};
