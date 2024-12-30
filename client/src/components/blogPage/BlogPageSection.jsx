import React, { useEffect, useState } from "react";
import useBlogStore from "../../stores/BlogStore"; // Zustand store
import { useParams, useNavigate } from "react-router-dom";
import "../../assets/css/blogPageSection.css";

const BlogPageSection = () => {
  const { blogs, fetchPublishedBlogs } = useBlogStore();
  const { slug } = useParams(); // Get the blog slug from URL
  const navigate = useNavigate();
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    if (blogs.length === 0) fetchPublishedBlogs(); // Fetch blogs if not already loaded
  }, [blogs, fetchPublishedBlogs]);

  useEffect(() => {
    // Set the selected blog based on the slug
    if (slug && blogs.length > 0) {
      const blog = blogs.find((blog) => blog.slug === slug);
      setSelectedBlog(blog);
    } else if (!slug && blogs.length > 0) {
      // Default to the first blog if no slug is provided
      setSelectedBlog(blogs[0]);
    }
  }, [slug, blogs]);

  // Render
  return (
    <div className="container blog-page">
      <div className="row">
        {/* All Blogs Section */}
        <div className="col-lg-4 col-md-12 blog-list">
          <h3>All Blogs</h3>
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className={`card blog-card mb-3 ${
                blog.slug === selectedBlog?.slug ? "active" : ""
              }`}
              onClick={() => navigate(`/blog/${blog.slug}`)} // Navigate to blog details
            >
              <img src={blog.image} className="card-img-top" alt={blog.title} />
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">
                  {blog.content.substring(0, 100)}... {/* Truncate content */}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Blog Details Section */}
        <div className="col-lg-8 col-md-12 blog-details">
          {selectedBlog ? (
            <>
              <h2 className="blog-title">{selectedBlog.title}</h2>
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="blog-image mb-3"
              />
              <p className="blog-content">{selectedBlog.content}</p>

              {/* Other Blog Links */}
              <h4>Other Blogs</h4>
              <ul className="other-blogs">
                {blogs
                  .filter((blog) => blog.slug !== selectedBlog.slug)
                  .map((blog) => (
                    <li key={blog._id} onClick={() => navigate(`/blog/${blog.slug}`)}>
                      {blog.title}
                    </li>
                  ))}
              </ul>
            </>
          ) : (
            <p>Loading blog details...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPageSection;
