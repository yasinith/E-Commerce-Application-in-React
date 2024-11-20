import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../store/authSlice';
import { Alert } from './CustomAlert.jsx';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

const AuthApp = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user, error } = useSelector((state) => state.auth);
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {error && (
        <Alert variant="destructive" className="mb-4">
          {error}
        </Alert>
      )}
      
      {!isAuthenticated ? (
        <div className="w-full max-w-md">
          {showLogin ? (
            <div className="space-y-4">
              <LoginForm />
              <div className="text-center mt-6">
                <p className="text-gray-600">New here?</p>
                <button 
                  onClick={toggleForm}
                  className="mt-2 text-blue-600 hover:text-blue-800 font-medium"
                >
                  Register Now
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <RegistrationForm />
              <div className="text-center mt-6">
                <p className="text-gray-600">Already have an account?</p>
                <button 
                  onClick={toggleForm}
                  className="mt-2 text-blue-600 hover:text-blue-800 font-medium"
                >
                  Login Instead
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl">Welcome, {user.name}!</h2>
          <button 
            onClick={() => dispatch(logoutUser())}
            className="mt-4 p-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthApp;