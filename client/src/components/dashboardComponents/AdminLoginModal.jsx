import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminLoginModalStore, useAdminLoginInfoStore } from '../../stores/adminLoginModalStore.js';
import '../../assets/css/dashboardStyles/AdminLoginModal.css';

const AdminLoginModal = () => {
  const { isModalOpen, closeModal } = useAdminLoginModalStore();
  const { login, isLoading, error } = useAdminLoginInfoStore();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password); // Call the login method
    setEmail("");
    setPassword("");

    // Redirect to dashboard if login is successful
    const isAuthenticated = localStorage.getItem("accessToken");
    if (isAuthenticated) {
      closeModal();
      navigate("/dashboard");
    }
  };

  const emailId = `email-${Math.random()}`;
  const passwordId = `password-${Math.random()}`;

  return (
    <div
      className={`modal-container ${isModalOpen ? 'show' : ''}`}
      onClick={closeModal}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // Prevent closing on content click
      >
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor={emailId} className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id={emailId}
              placeholder="Enter email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor={passwordId} className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id={passwordId}
              placeholder="Password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-danger">{error}</p>}
          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <button className="btn btn-secondary mt-3 w-100" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default AdminLoginModal;