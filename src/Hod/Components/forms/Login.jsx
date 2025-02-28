import React, { useState } from "react";
import { API_URL } from "../../../Principle/data/dataApi";

const Login = ({ resetHodPassword }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch(`${API_URL}/hod/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      if (response.ok) {
        alert("Login successful! Welcome " + data.hodName);
        setEmail("");
        setPassword("");
        localStorage.setItem('hodToken', data.token);
        localStorage.setItem('hodId', data.hodId);
        localStorage.setItem('hodName', data.hodName);
        window.location.reload();
      } else {
        setErrorMessage(data.message || "Failed to login. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='loginSection'>
      <form className='register-form' onSubmit={handleLogin}>
        <h3>HOD Login</h3>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <label>Email:</label>
        <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' /><br />
        <label>Password:</label>
        <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' /><br />
        <div className="submitBtn">
          <button type='submit'>Submit</button>
          {loading && <div className="spinner"></div>}
        </div>
        <div className="resetPassword">
          <h4 style={{ color: 'red', letterSpacing: '2px' }} onClick={resetHodPassword}>Reset Password</h4>
        </div>
      </form>
    </div>
  );
};

export default Login;