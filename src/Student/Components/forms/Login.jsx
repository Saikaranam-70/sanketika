import React, { useState } from 'react';
import { API_URL } from '../../../Principle/data/dataApi';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: "", text: "" });

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: "", text: "" });

        if (!email || !password) {
            setMessage({ type: "error", text: "Please fill in both email and password." });
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`${API_URL}/student/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                setMessage({ type: "success", text: "Login successful! Redirecting..." });
                localStorage.setItem('studentToken', data.token);
                localStorage.setItem('studentId', data.studentId);
                localStorage.setItem('studentName', data.studentName);
                setEmail("");
                setPassword("");
                setTimeout(() => window.location.reload(), 1000); // Slight delay for better UX
            } else {
                setMessage({ type: "error", text: data.message || "Invalid email or password." });
            }
        } catch (error) {
            console.error(error);
            setMessage({ type: "error", text: "Failed to login. Please try again later." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='loginSection'>
            <form className='register-form' onSubmit={handleLogin}>
                <h3>Student Login</h3><br />
                {message.text && (
                    <div style={{ color: message.type === "error" ? "red" : "green", marginBottom: "10px" }}>
                        {message.text}
                    </div>
                )}
                <label>Email:</label><br />
                <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Email' /><br />
                <label>Password:</label><br />
                <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your Password' />
                <div className="submitBtn">
                    <button type='submit' disabled={loading}>
                        {loading ? "Logging in..." : "Submit"}
                    </button>
                    {loading && <div className="spinner"></div>} {/* Loading spinner */}
                </div>
            </form>
        </div>
    );
};

export default Login;
