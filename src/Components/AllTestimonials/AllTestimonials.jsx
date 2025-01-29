import React, { useEffect, useState } from 'react';
import './AllTestimonials.css';
import { API_URL } from '../../Principle/data/dataApi';

const AllTestimonials = () => {
  const [feed, setFeed] = useState([]);
  const [profile, setProfile] = useState(null);

  const handleFeed = async () => {
    try {
      const response = await fetch(`${API_URL}/feedback/all`);
      const data = await response.json();
      setFeed(data.feedback);
      setProfile(data.feedback.studentImg);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFeed();
  }, []);

  return (
    <div className="all-testimonials">
      <h1>All Testimonials</h1>
      <div className="testimonials-list">
        {feed.map((item) => (
          <div className="testimonial" key={item._id}>
            <div className="user-info">
              <img src={`${API_URL}/hod/uploads/${item.student[0]}}`} alt="" />
              <div>
                <h3>{item.name}</h3>
                <span>{item.branch}, {item.section}</span>
              </div>
            </div>
            <p>{item.feed}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTestimonials;
