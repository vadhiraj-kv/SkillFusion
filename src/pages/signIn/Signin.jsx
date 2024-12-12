import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signin.scss';

const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if fields are empty
    if (!username || !password) {
      setError('Please fill in both fields.');
      return;
    }

    // If fields are not empty, clear the error and navigate to home
    setError('');
    navigate('/'); // Redirect to home page after successful sign-in
  };

  return (
    <div className="signin-container">
      <h1>Sign In to SkillFusion</h1>

      {/* Display error if validation fails */}
      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit} className="signin-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        <div className="form-actions">
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
