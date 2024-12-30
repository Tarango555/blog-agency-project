import create from 'zustand';
import axios from 'axios';

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  token: null,
  user: null,

  // Admin Login
  login: async (email, password) => {
    try {
      const response = await axios.post('/AdminLogin', { email, password });
      const { token, user } = response.data;
      set({ isAuthenticated: true, token, user });
      localStorage.setItem('token', token); // Persist token
    } catch (error) {
      console.error('Login failed:', error.response?.data || error.message);
    }
  },

  // Admin Logout
  logout: async () => {
    try {
      await axios.post('/AdminLogout');
      set({ isAuthenticated: false, token: null, user: null });
      localStorage.removeItem('token');
    } catch (error) {
      console.error('Logout failed:', error.response?.data || error.message);
    }
  },

  // Fetch Admin Profile
  fetchProfile: async () => {
    try {
      const response = await axios.get('/AdminProfile', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      set({ user: response.data });
    } catch (error) {
      console.error('Fetch profile failed:', error.response?.data || error.message);
    }
  },
}));

export default useAuthStore;
