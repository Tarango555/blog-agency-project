import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { useAdminLoginInfoStore } from "./stores/adminLoginModalStore";
import apiClient, { checkTokenExpiry } from "./utils/apiClient";

const App = () => {
  const { setAccessToken, setAdmin } = useAdminLoginInfoStore();

  useEffect(() => {
    const initializeApp = async () => {
      const storedAccessToken = localStorage.getItem("accessToken");

      if (storedAccessToken && !checkTokenExpiry(storedAccessToken)) {
        setAccessToken(storedAccessToken);

        try {
          const response = await apiClient.get("/AdminProfile");
          setAdmin(response.data.data.admin);
        } catch (error) {
          console.error("Failed to authenticate admin:", error);
          localStorage.removeItem("accessToken");
          setAccessToken(null);
        }
      }
    };

    initializeApp();
  }, [setAccessToken, setAdmin]);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
