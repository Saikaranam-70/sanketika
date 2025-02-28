import React, { useState } from 'react';
import { API_URL } from '../../data/dataApi';
import '../Principal.css';

const Login = ({ resetPassword }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    if (!email || !password) {
      setMessage({ type: "error", text: "Please enter both email and password." });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_URL}/principle/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: "Login successful! Redirecting..." });
        localStorage.setItem('loginToken', data.token);
        localStorage.setItem('principleId', data.principleId);
        localStorage.setItem('name', data.principleName);
        setTimeout(() => window.location.reload(), 1000); // Delay for better UX
      } else {
        setMessage({ type: "error", text: data.error || "Invalid email or password." });
      }
    } catch (error) {
      console.error("Login Error:", error);
      setMessage({ type: "error", text: "Failed to connect. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='loginSection'>
      <form className='register-form' onSubmit={loginHandler}>
        <h3>Principal Login</h3>

        {message.text && (
          <p className={message.type === "error" ? "errorMessage" : "successMessage"}>
            {message.text}
          </p>
        )}

        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter your email'
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter your password'
        />

        <div className="submitBtn">
          <button type='submit' disabled={loading}>
            {loading ? 'Logging in...' : 'Submit'}
          </button>
        </div>

        <div className="resetPassword" onClick={resetPassword}>
          <h4>Reset Password</h4>
        </div>
      </form>
    </div>
  );
};

export default Login;
