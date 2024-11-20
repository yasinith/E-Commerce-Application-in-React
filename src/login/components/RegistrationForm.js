import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser, setError } from '../store/authSlice';
import './RegistrationForm.css'

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validatePassword = (password) => {
  return password.length >= 6;
};

const RegistrationForm = () => {
  const [registrationName, setRegistrationName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleRegistration = () => {
    if (!registrationName) {
      dispatch(setError('Name is required'));
      return;
    }
    if (!validateEmail(email)) {
      dispatch(setError('Invalid email format'));
      return;
    }
    if (!validatePassword(password)) {
      dispatch(setError('Password must be at least 6 characters'));
      return;
    }

    dispatch(registerUser({ 
      name: registrationName, 
      email 
    }));
  };

  return (
    <div className="w-full max-w-md p-8 space-y-4">
      <h2 className="text-2xl font-bold text-center">Registration</h2>
      <div>
        <label className="block mb-2">Name</label>
        <input
          type="text"
          value={registrationName}
          onChange={(e) => setRegistrationName(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Enter your name"
        />
      </div>
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
        onClick={handleRegistration}
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Register
      </button>
    </div>
  );
};

export default RegistrationForm;