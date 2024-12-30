import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAdminLoginInfoStore } from '../../stores/adminLoginModalStore';

const ProtectedRoute = ({ children }) => {
  const { accessToken } = useAdminLoginInfoStore();

  // If no token, redirect to home
  if (!accessToken) {
    return <Navigate to="/" />;
  }

  // Render the protected component
  return children;
};

export default ProtectedRoute;
