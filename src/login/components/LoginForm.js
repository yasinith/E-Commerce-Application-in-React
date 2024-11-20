import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser, setError } from '../store/authSlice';
import './LoginForm.module.css'

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validatePassword = (password) => {
  return password.length >= 6;
};

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (!validateEmail(email)) {
      dispatch(setError('Invalid email format'));
      return;
    }
    if (!validatePassword(password)) {
      dispatch(setError('Password must be at least 6 characters'));
      return;
    }

    dispatch(loginUser({ email }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="w-full max-w-md p-8 space-y-4 bg-white shadow-md rounded">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <div className="flex flex-col space-y-4">
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
            />
          </div>
          <button 
            onClick={handleLogin}
            className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Login
          </button>
        </div>
      </form> 
    </div>
  );
};

export default LoginForm;