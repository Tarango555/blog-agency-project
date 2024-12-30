import React from "react";
import { toast } from "react-toastify";
import useModalStore from "../../stores/ModalStore";
import useBlogStore from "../../stores/BlogStore";
import "../../assets/css/dashboardStyles/EditBlogModal.css";

const EditBlogModal = () => {

  const { isModalVisible, modalType, modalData, updateModalData, closeModal } = useModalStore();
  const { createBlog, updateBlog } = useBlogStore();

  if (!isModalVisible) return null; // Don't render if the modal is not visible

  const handleSave = async () => {
    const sanitizedData = {
      title: modalData.title,
      slug: modalData.slug,
      content: modalData.content,
      image: modalData.image,
      status: modalData.status,
    };
  
    try {
      if (modalType === "edit") {
        await updateBlog(modalData._id, sanitizedData); // Ensure this is awaited for consistency
        toast.success("Blog updated successfully!");
      } else if (modalType === "create") {
        const newBlog = await createBlog(sanitizedData); // Wait for the blog to be created
        if (newBlog) {
          toast.success("Blog created successfully!"); // Success notification
        } else {
          toast.error("Failed to create blog.");
        }
      }
      closeModal(); // Close modal after successful save
    } catch (error) {
      console.error("Error while saving:", error);
      toast.error("Failed to save the blog. Please try again.");
    }
  };
  

  const titleId = `title-${Math.random()}`;
  const slugId = `slug-${Math.random()}`;
  const contentId = `content-${Math.random()}`;
  const imageId = `image-${Math.random()}`;
  const statusId = `status-${Math.random()}`;


  return (
    
      <div className="better-modal-overlay">
        <div className="better-modal-container">
          <div className="better-modal-header rounded">
            <h4>{modalType === "edit" ? "Edit Blog" : "Create New Blog"}</h4>
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
          </div>

        {/* Title Field */}
        <div className="input-group my-3">
            <label htmlFor={titleId}>Title</label>
            <input
                type="text"
                id={titleId} // Add id
                name="title" // Optional, useful for form submission
                value={modalData.title || ""}
                onChange={(e) => updateModalData({ title: e.target.value })}
            />
        </div>

        {/* Slug Field */}
        <div className="input-group">
            <label htmlFor={slugId}>Slug</label>
            <input
                type="text"
                id={slugId}
                name="slug"
                value={modalData.slug || ""}
                onChange={(e) => updateModalData({ slug: e.target.value })}
            />
        </div>

        {/* Content Field */}
        <div className="input-group">
            <label htmlFor={contentId}>Content</label>
            <textarea
                id={contentId}
                name="content"
                rows="4"
                value={modalData.content || ""}
                onChange={(e) => updateModalData({ content: e.target.value })}
            ></textarea>
        </div>

        {/* Image Field */}
        <div className="input-group">
            <label htmlFor={imageId}>Image URL</label>
            <input
                type="text"
                id={imageId}
                name="image"
                value={modalData.image || ""}
                onChange={(e) => updateModalData({ image: e.target.value })}
            />
        </div>

        {/* Status Field */}
        <div className="input-group">
            <label htmlFor={statusId}>Status</label>
            <select
                id={statusId}
                name="status"
                value={modalData.status || "draft"}
                onChange={(e) => updateModalData({ status: e.target.value })}
            >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
            </select>
        </div>


        <div className="better-modal-footer rounded">
          <button className="btn btn-secondary" onClick={closeModal}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleSave}>
            {modalType === "edit" ? "Save Changes" : "Create Blog"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBlogModal;
