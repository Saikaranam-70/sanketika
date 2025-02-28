import React, { useEffect, useState } from 'react';
import './Feedback.css'; // Import the CSS file
import Footer from '../Footer/Footer';
import { API_URL } from '../../Principle/data/dataApi';

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {

        const response = await fetch(`${API_URL}/feedback/all`);


        if (!response.ok) {
          throw new Error('Failed to fetch feedbacks');
        }
        const data = await response.json();
        setFeedbacks(data.feedback);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
    <div className="feedbacks-container">
      <h1>Student Feedbacks</h1>
      <div className="feedbacks-list">
        {feedbacks.map((feedback) => (
          <div key={feedback._id} className="feedback-card">
            <div className="feedback-header">
              {feedback.studentImg && feedback.studentImg[0] ? (
                <img
                  src={`${API_URL}/student/uploads/${feedback.studentImg[0]}`}
                  alt={feedback.name}
                  className="student-image"
                />
              ) : (
                <div className="student-image-placeholder">No Image</div>
              )}
              <div className="student-info">
                <h2>{feedback.name}</h2>
                <p>
                  {feedback.branch} - Section {feedback.section}
                </p>
              </div>
            </div>
            <div className="feedback-content">
              <p>{feedback.feed}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Feedback;
