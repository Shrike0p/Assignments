import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Our App</h1>
      <p className="home-description">
        Please choose an option to proceed:
      </p>
      <div className="home-button-container">
        <button className="home-button" onClick={() => navigate('/login')}>
          Login
        </button>
        <button className="home-button" onClick={() => navigate('/signup')}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default Home;
