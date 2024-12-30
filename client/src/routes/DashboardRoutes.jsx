import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/dashboardPages/HomePage";
import AnalyticsPage from "../pages/dashboardPages/AnalyticsPage";
import SettingsPage from "../pages/dashboardPages/SettingsPage";
import NotFound from "../pages/NotFound";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/analytics" element={<AnalyticsPage />} />
      <Route path="/settings" element={<SettingsPage />} />

      {/* Fallback route for undefined dashboard paths */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default DashboardRoutes;