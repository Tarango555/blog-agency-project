import React, { useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import useBlogStore from "../../stores/BlogStore";
import useModalStore from "../../stores/ModalStore";
import EditBlogModal from "./EditBlogModal";
import "../../assets/css/dashboardStyles/BlogTable.css";

const BlogTable = () => {

  const { blogs, filter, applyFilterAndSearch, deleteBlog } = useBlogStore(); // Access filter and applyFilter
  const { openModal } = useModalStore();

  // Fetch blogs whenever the filter changes
  useEffect(() => {
    applyFilterAndSearch();
  }, [filter, applyFilterAndSearch]); // Add `filter` as a dependency to trigger re-fetching

  // Handle Delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      deleteBlog(id);
    }
  };

  // Open Edit Modal
  const handleEdit = (blog) => {
    openModal("edit", blog); // Open modal in "edit" mode with blog data
  };

  return (
    <div className="table-container">
      <h2 className="mb-4">Manage Blogs</h2>
      <table className="table table-striped table-hover blog-table">
        <thead className="table-light">
          <tr>
            <th>Title</th>
            <th>Slug</th>
            <th>Content</th>
            <th>Image</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs && blogs.length > 0 ? (
            blogs.map((blog) => (
              <tr key={blog._id || Math.random()}>
                <td>{blog.title}</td>
                <td>{blog.slug}</td>
                <td className="content-cell">
                  {/* Safely handle content */}
                  {(blog.content || "No Content").split("\n").map((line, lineIndex) => (
                    <p key={`${blog._id}-line-${lineIndex}`}>{line}</p>
                  ))}
                </td>
                <td>
                  {blog.image ? (
                    <img
                      src={blog.image}
                      alt="Blog"
                      className="blog-image"
                    />
                  ) : (
                    <span>No Image</span>
                  )}
                </td>
                <td>
                  <span
                    className={`badge ${
                      blog.status === "published"
                        ? "bg-success"
                        : "bg-secondary"
                    }`}
                  >
                    {blog.status}
                  </span>
                </td>
                <td className="action-buttons">
                  <button
                    className="btn btn-sm btn-primary me-2"
                    onClick={() => handleEdit(blog)}
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(blog._id)}
                  >
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No blogs found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal is now globally controlled in ModalStore */}
      <EditBlogModal />
    </div>
  );
};

export default BlogTable;
