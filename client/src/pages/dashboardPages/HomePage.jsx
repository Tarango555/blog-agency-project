import React, { useEffect } from "react";
import { Layout } from "../../components/dashboardComponents/DashboardLayout";
import BlogTable from "../../components/dashboardComponents/BlogTable";
import BlogControls from "../../components/dashboardComponents/BlogControls";
import EditBlogModal from "../../components/dashboardComponents/EditBlogModal";
import useBlogStore from "../../stores/BlogStore";
import useModalStore from "../../stores/ModalStore";

const HomePage = () => {
  const { blogs, fetchAllBlogs } = useBlogStore();
  const { openModal } = useModalStore();

  useEffect(() => {
    fetchAllBlogs(); // Fetch all blogs on initial load
  }, [fetchAllBlogs]);

  const handleAddNew = () => {
    openModal("create", {
      title: "",
      slug: "",
      content: "",
      image: "",
      status: "draft",
    });
  };

  return (
    <Layout>
      <BlogControls
        onAddNew={handleAddNew}
      />
      <BlogTable blogs={blogs} /> {/* Pass filtered blogs */}
      <EditBlogModal />
    </Layout>
  );
};

export default HomePage;