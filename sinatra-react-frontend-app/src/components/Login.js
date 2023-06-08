import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'


const Login = () => {
const navigate = useNavigate();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

  const handleLogin = async(e) => {
      e.preventDefault();
        try {
          const response = await fetch('http://localhost:9292/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              password,
            }),
          });
          if (response.ok) {
            const data = await response.json();
            // Handle successful sign-in response
            // Redirect to another page, e.g., dashboard
            navigate('/');
            alert(`Successfully logged in as ${data.username}`);
             console.log(data)
          } else {
            alert('Sign-in failed');
          }
        } catch (error) {
          console.log('An error occurred during sign-in:', error);
        }
    
  };

  return (
    <div className="loginFormContainer">
      <form className="loginForm" onSubmit={handleLogin}>
        <h1>Login</h1>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
