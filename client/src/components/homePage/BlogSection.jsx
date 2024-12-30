import React, { useEffect } from "react";
import useBlogStore from "../../stores/BlogStore.js";
import "../../assets/css/blogSection.css";

const BlogSection = () => {
  const { blogs, fetchPublishedBlogs } = useBlogStore();

  useEffect(() => {
    fetchPublishedBlogs(); // Fetch published blogs from the store
  }, [fetchPublishedBlogs]);

  return (
    <section className="blog-section container">
      <h2 className="section-title">Latest Blogs</h2>
      <div className="blogs-wrapper">
        {blogs.slice(0, 6).map((blog) => (
          <div className="blog-card" key={blog._id}>
            <img
              src={blog.image || "https://via.placeholder.com/400"}
              alt={blog.title}
              className="blog-image"
            />
            <div className="blog-content">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-excerpt">
                {blog.content.length > 100
                  ? blog.content.substring(0, 100) + "..."
                  : blog.content}
              </p>
              <a href={`/blog/${blog.slug}`} className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
