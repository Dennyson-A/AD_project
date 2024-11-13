import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';  // Import the CSS file

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email format validation
    const studentRegex = /^[a-zA-Z]+[.][0-9]+[a-zA-Z]+@licet\.ac\.in$/;  // e.g., name.number@licet.ac.in
    const facultyRegex = /^[a-zA-Z]+@licet\.ac\.in$/;           // e.g., name@licet.ac.in

    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    if (!studentRegex.test(username) && !facultyRegex.test(username)) {
      setError('Invalid email format');
      return;
    }

    // Log in the credentials and navigate
    // console.log('Username:', username);
    // console.log('Password:', password);

    // Redirect to the student page after successful login
    if(studentRegex.test(username))
    {
      navigate('/studentpage');
    }else{
      navigate('/facultypage');
    }
  };

  return (
    <div class='page'>
    <div className="login-page">
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
}

export default LoginPage;
