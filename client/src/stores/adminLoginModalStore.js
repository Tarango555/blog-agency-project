import { create } from 'zustand';
import axios from '../utilities/centralizedAxios';


export const useAdminLoginModalStore = create((set) => ({
  isModalOpen: false, // Initial state: the modal is hidden.
  openModal: () => set({ isModalOpen: true }), // Action: Show the modal by setting `isModalOpen` to `true`.
  closeModal: () => set({ isModalOpen: false }), // Action: Hide the modal by setting `isModalOpen` to `false`
}));

export const useAdminLoginInfoStore = create((set) => ({
  accessToken: null, // Stores the current access token
  refreshToken: null, // Stores the refresh token
  admin: null, // Initial state: No admin is logged in.
  isLoading: false, // Tracks whether the login API request is in progress.
  error: null, // Stores any error messages from the API.

  // Method to set a new access token (e.g., after refreshing)
  setAccessToken: (newAccessToken) => set({ accessToken: newAccessToken }),

  // Method to set admin details
  setAdmin: (adminData) => set({ admin: adminData }),

  // Logout method to reset the state
  logout: () => set({
    accessToken: null,
    refreshToken: null,
    admin: null,
  }),
  
  //Login method
  login: async (email, password) => {

    set({ isLoading: true, error: null }); // Set loading state to true and clear any existing error.

    try {
      
      const response = await axios.post('/AdminLogin',{ email, password });

      const { accessToken, refreshToken, admin } = response.data.data;

      // Save tokens to localStorage
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      // Store the access and refresh token, admin data from the API response and reset loading state.
      set({ accessToken, refreshToken, admin, isLoading: false });

      return true; // Indicate successful login

    } catch (error) {
      set({
        error: error.response?.data?.message || 'Login failed. Please try again.', // Capture the error message from the response or use a default message.
        isLoading: false, // Reset loading state.
      });
    }
  },
}));