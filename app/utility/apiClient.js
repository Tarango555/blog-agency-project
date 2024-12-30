import axios from 'axios';
import { useAdminLoginInfoStore } from './stores/adminLoginModalStore';

const apiClient = axios.create({
  baseURL: 'http://localhost:5050/api',
  withCredentials: true, // Ensures cookies (refresh token) are sent with requests
});

// Add a request interceptor
apiClient.interceptors.request.use(
  async (config) => {
    const { accessToken, refreshToken, setAccessToken } = useAdminLoginInfoStore.getState();

    // Check if access token exists
    if (!accessToken) return config;

    // Decode token to check expiration (optional, e.g., using jwt-decode library)
    const isExpired = checkTokenExpiry(accessToken); // Replace with your own logic
    if (isExpired) {
      try {
        const response = await apiClient.post('/refresh-token', { token: refreshToken });
        const newAccessToken = response.data.accessToken;

        // Save new access token in Zustand store
        setAccessToken(newAccessToken);

        // Update header with new token
        config.headers.Authorization = `Bearer ${newAccessToken}`;
      } catch (err) {
        console.error('Token refresh failed', err);
        // Handle logout or re-authentication
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
