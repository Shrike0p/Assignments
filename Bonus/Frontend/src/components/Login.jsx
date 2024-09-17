import React, { useState } from 'react';
import axios from 'axios';
import { z } from 'zod';

const Login = () => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Zod validation
    const userSchema = z.object({
      nickname: z.string().min(3, 'Nickname must be at least 3 characters long'),
      password: z.string().min(6, 'Password must be at least 6 characters long'),
    });

    const validation = userSchema.safeParse({ nickname, password });

    if (!validation.success) {
      setMessage(validation.error.errors[0].message);
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/v1/auth/login', {
        nickname,
        password,
      });

      setMessage(response.data.message);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      setMessage(error.response.data.error || 'An error occurred');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Login;
