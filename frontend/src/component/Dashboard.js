import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check the URL to determine if it's an admin or customer dashboard
  const isAdmin = location.pathname.includes('admin');
  const isCustomer = location.pathname.includes('customer');

  if (!isAdmin && !isCustomer) {
    // If the user is not an admin or customer, redirect to a fallback page (e.g., login)
    navigate('/login');
    return null;
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>{isAdmin ? 'Admin Dashboard' : 'Customer Dashboard'}</h1>
        <div className="user-info">
          <span className="username">Welcome, {isAdmin ? 'Admin' : 'Customer'}</span>
        </div>
      </header>
    </div>
  );
};

export default Dashboard;
