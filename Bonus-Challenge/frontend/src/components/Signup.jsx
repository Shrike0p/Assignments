import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [form, setForm] = useState({ nickname: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); 
    try {
      const { data } = await axios.post('http://localhost:5000/api/auth/signup', form);
      localStorage.setItem('token', data.token);
      window.location.href = '/dashboard';
    } catch (err) {
      console.error(err.message);
      setError(err.response?.data.error || 'An error occurred');
      alert(err.response?.data.error || 'An error occurred'); 
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="nickname" onChange={handleChange} placeholder="Nickname" required />
        <input name="email" type="email" onChange={handleChange} placeholder="Email" required />
        <input name="password" type="password" onChange={handleChange} placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Signup;
