import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) navigate('/login');
  }, [navigate]);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome to the Dashboard</h1>
      <p className="dashboard-description">
        This is your main hub where you can manage your account and explore various features.
      </p>
      <button onClick={handleLogout} className="dashboard-logout-button">Logout</button>
    </div>
  );
};

export default Dashboard;
