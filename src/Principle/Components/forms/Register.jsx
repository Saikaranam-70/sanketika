import React, { useState } from 'react';
import { API_URL } from '../../data/dataApi';
import '../Principal.css'

const Register = ({ showLoginHandler }) => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [collegeId, setCollegeId] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const response = await fetch(`${API_URL}/principle/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userName, email, password, name, collegeId })
            });
            const data = await response.json();

            if (response.ok) {
                setUserName("");
                setEmail("");
                setPassword("");
                setName("");
                setCollegeId("");
                alert("Principal registered successfully!");
                showLoginHandler();
            } else {
                setError(data.message || "Registration failed. Please try again.");
            }
        } catch (error) {
            setError("Something went wrong. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='registerSection'>
            <form className="register-form" onSubmit={handleRegister}>
                <h3>Principal Register</h3>
                {error && <p className='error'>{error}</p>}
                <label>User Name :</label>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='Enter your User Name' />
                <label>Email :</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Email' />
                <label>Password :</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your Password' />
                <label>Name :</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your Name' />
                <label>College ID :</label>
                <input type="text" value={collegeId} onChange={(e) => setCollegeId(e.target.value)} placeholder='Enter your College ID' />
                <div className="submitBtn">
                    <button type='submit' disabled={isLoading}>{isLoading ? 'Submitting...' : 'Submit'}</button>
                </div>
            </form>
        </div>
    );
};

export default Register;