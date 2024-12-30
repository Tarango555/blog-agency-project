import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center">
      <h1>404</h1>
      <p>Page not found</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default NotFound;
