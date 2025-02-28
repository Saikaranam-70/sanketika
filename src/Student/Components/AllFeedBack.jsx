import React, { useEffect, useState } from 'react';
import { API_URL } from '../../Principle/data/dataApi';
import './Navbar.css';

const AllFeedBack = () => {
    const [feedback, setFeedback] = useState([]);

    const fetchFeedback = async () => {
        const studentId = localStorage.getItem('studentId');
        try {
            const response = await fetch(`${API_URL}/feedback/get-feedback/${studentId}`);
            const data = await response.json();
            setFeedback(data.feedback);
        } catch (error) {
            console.error('Error fetching feedback:', error);
        }
    };

    useEffect(() => {
        fetchFeedback();
    }, []);

    const handleDeleteFeedback = async (feedbackId) => {
        try {
            const response = await fetch(`${API_URL}/feedback/delete-feedback/${feedbackId}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                setFeedback(feedback.filter(item => item._id !== feedbackId));
                alert('Feedback deleted successfully!');
            } else {
                alert('Failed to delete feedback.');
            }
        } catch (error) {
            console.error('Error deleting feedback:', error);
            alert('Error deleting feedback.');
        }
    };

    return (
        <div className='feedback-container'>
            <h2 className='feedback-title'>Student Feedback</h2>
            {feedback.length === 0 ? (
                <p className='no-feedback'>No feedback found.</p>
            ) : (
                <div className='table-wrapper'>
                    <table className='feedback-table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Branch</th>
                                <th>Section</th>
                                <th>Feedback</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {feedback.map(item => (
                                <tr key={item._id}>
                                    <td>{item.name}</td>
                                    <td>{item.branch}</td>
                                    <td>{item.section}</td>
                                    <td>{item.feed}</td>
                                    <td>
                                        <button 
                                            className='delete-button' 
                                            onClick={() => handleDeleteFeedback(item._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AllFeedBack;
