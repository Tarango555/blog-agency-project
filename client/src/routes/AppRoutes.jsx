import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/dashboardComponents/ProtectedRoute";
import PublicRoutes from "./PublicRoutes";
import DashboardRoutes from "./DashboardRoutes";
import AdminLoginModal from "../components/dashboardComponents/AdminLoginModal";
import { useAdminLoginModalStore } from "../stores/adminLoginModalStore";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  const { isModalOpen } = useAdminLoginModalStore();

  return (
    <>
      {isModalOpen && <AdminLoginModal />}
      <Routes>

        {/* Public Routes */}
        <Route path="/*" element={<PublicRoutes />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <DashboardRoutes />
            </ProtectedRoute>
          }
        />

        {/* Fallback route for undefined paths */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
};

export default AppRoutes;
