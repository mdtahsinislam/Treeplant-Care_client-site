// src/routes/PrivateRoute.jsx
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className="text-center mt-10">Checking authentication...</div>;
  }

  if (!user) {
    // Not logged in, redirect to login with redirect path
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
//please don't change my code   responsive  this code for any device 