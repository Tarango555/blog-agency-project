import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { handleLogout } from '../../utils/apiClient';
import '../../assets/css/dashboardStyles/SidebarMenu.css';

const SidebarMenu = () => {

  const navigate = useNavigate();

  const onLogout = async (event) => {
    event.preventDefault(); // Prevent the default navigation behavior

    if (window.confirm("Are you sure you want to log out?")) {
      await handleLogout(); // Call the logout function
      navigate("/"); // Redirect to the home page
    }
  };

    return (
      //Navbar component
      <div className="bg-dark sidebar-menu d-flex flex-column justify-content-center align-items-center rounded m-3">
        <ul className="nav flex-column text-white w-100">
          <Link to="/dashboard" className="text-white text-decoration-none">
            <li className="nav-item mb-4 d-flex align-items-center justify-content-start ps-3">
              <i className="bi bi-house-door me-3"></i>
              <span className="fw-bold">Home</span>
            </li>
          </Link>
          <Link to="/dashboard/analytics" className="text-white text-decoration-none">
            <li className="nav-item mb-4 d-flex align-items-center justify-content-start ps-3">
              <i className="bi bi-graph-up-arrow me-3"></i>
              <span className="fw-bold">Analytics</span>
            </li>
          </Link>
          <Link to="/dashboard/settings" className="text-white text-decoration-none">
            <li className="nav-item mb-4 d-flex align-items-center justify-content-start ps-3">
              <i className="bi bi-gear me-3"></i>
              <span className="fw-bold">Settings</span>
            </li>
          </Link>
            <li className="nav-item mb-4 d-flex align-items-center justify-content-start ps-3"
                onClick={onLogout}
                style={{ cursor: 'pointer' }}
            >
              <i className="bi bi-box-arrow-right me-3"></i>
              <span className="fw-bold">Logout</span>
            </li>
        </ul>
      </div>
    );
  };

// Layout Component
const Layout = ({ children }) => {
    return (
        <div className="layout d-flex" style={{ backgroundColor: '#EFF3F6' }}>
            <SidebarMenu />
            <div className="content-area bg-white shadow-sm rounded flex-grow-1 m-3">
                {children}
            </div>
        </div>
    );
};

export { SidebarMenu, Layout };
