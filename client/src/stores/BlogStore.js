// Import necessary dependencies
import { create } from 'zustand';
import axios from '../utilities/centralizedAxios.js';

// Define Zustand store for managing blogs and states
const useBlogStore = create((set, get) => ({
    blogs: [], // List of all blogs
    filter: 'All', // Current filter (Published, Draft)
    selectedBlog: null, // Currently selected blog for editing
    isCreating: false, // Whether the create form is active
    searchQuery: "", // Current search query

    // Setters for state management
    setBlogs: (blogs) => set({ blogs }),
    setFilter: (filter) => set({ filter }),
    setSelectedBlog: (blog) => set({ selectedBlog: blog }),
    setIsCreating: (isCreating) => set({ isCreating }),
    setSearchQuery: (query) => set({ searchQuery: query }),
    

    // Fetch blogs based on the current filter
    applyFilterAndSearch: async () => {
        const { filter, searchQuery } = get(); // Access state values
        let endpoint = "/GetAllBlogs"; // Default API endpoint

        if (filter === "published") {
            endpoint = "/PublishedBlogs";
        } else if (filter === "draft") {
            endpoint = "/DraftedBlogs";
        }

        try {
            const response = await axios.get(endpoint);
            const allBlogs = response.data.data;

            // Apply search query
            const filteredBlogs = allBlogs.filter((blog) =>
                blog.title.toLowerCase().includes(searchQuery.toLowerCase())
            );

            set({ blogs: filteredBlogs }); // Update the state
        } catch (error) {
            console.error("Error applying filter and search:", error.response?.data || error.message);
        }
    },

    // Fetch all blogs
    fetchAllBlogs: async () => {
        try {
          const response = await axios.get('/GetAllBlogs');
          set({ blogs: response.data.data });
        } catch (error) {
          console.error('Fetch all blogs failed:', error.response?.data || error.message);
        }
      },

    // Fetch published blogs
    fetchPublishedBlogs: async () => {
        try {
            const response = await axios.get('/PublishedBlogs'); // API route for published blogs
            set({ blogs: response.data.data });
        } catch (error) {
            console.error('Error fetching published blogs:', error.response?.data || error.message);
        }
    },

    // Fetch drafted blogs
    fetchDraftedBlogs: async () => {
        try {
            const response = await axios.get('/DraftedBlogs'); // API route for drafted blogs
            set({ blogs: response.data.data });
        } catch (error) {
            console.error('Error fetching drafted blogs:', error.response?.data || error.message);
        }
    },

    // Create a new blog
    createBlog: async (blogData) => {
        try {
          const response = await axios.post("/CreateBlog", blogData, {
            headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
          });

          const newBlog = response.data;

          set((state) => ({ blogs: [...state.blogs, newBlog] })); // Update the blogs state

          // Fetch all blogs to ensure the state is up to date
          await get().fetchAllBlogs();

        } catch (error) {
          console.error("Error creating blog:", error.response?.data || error.message);
          throw error; // Rethrow error to handle it in handleSave
        }
      },
      

    // Update an existing blog
    updateBlog: async (id, updatedData) => {

        
        try {
            const response = await axios.put(`/UpdateBlog/${id}`, updatedData, {
                headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
            });
            
            set((state) => ({
                blogs: state.blogs.map((blog) => (blog._id === id ? { ...blog, ...updatedData } : blog)),
            }));

        } catch (error) {
            console.error('Error updating blog:', error.response?.data || error.message);
        }
    },

    // Delete a blog
    deleteBlog: async (id) => {
        try {
            await axios.delete(`/DeleteBlog/${id}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
            });

            set((state) => ({ blogs: state.blogs.filter((blog) => blog._id !== id) }));

        } catch (error) {
            console.error('Error deleting blog:', error.response?.data || error.message);
        }
    },

    // Fetch dashboard stats
    fetchDashboardStats: async () => {
        try {
            const response = await axios.get('/api/dashboard/stats', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
            });
            set({ dashboardStats: response.data });
        } catch (error) {
            console.error('Error fetching dashboard stats:', error.response?.data || error.message);
        }
    },
}));

export default useBlogStore;
