import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';



const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Make API request to the backend for user sign-up
      const response = await fetch('http://localhost:9292/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      if (response.ok) {
        // Handle successful sign-up response
        // Redirect to another page, e.g., dashboard
        navigate('/');
        console.log(response);
      } else {
        // Handle sign-up error response
        console.log('Sign-up failed');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signupFormContainer">
      <form className="signupForm" onSubmit={handleSignUp}>
        <h1>Sign Up</h1>
        <label>
          Username <span>*</span>
        </label>
        <input
          type="text"
          required
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>
          Email <span>*</span>
        </label>
        <input
          type="email"
          required
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>
          Password <span>*</span>
        </label>
        <input
          type="password"
          required
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
