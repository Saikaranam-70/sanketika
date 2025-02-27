import React, { useEffect, useRef, useState } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.webp';
import back_icon from '../../assets/back-icon.webp';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../Principle/data/dataApi';

const Testimonials = () => {
  const [feed, setFeed] = useState([]);
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

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

  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -400) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const handleShowMore = () => {
    navigate('/all-testimonials');
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next" onClick={slideForward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          {feed.map((item) => (
            <li key={item._id}>
              <div className="slide">
                <div className="user-info">
                  <img src={`${API_URL}/hod/uploads/${item.student[0]}}`} alt="" />
                  <div>
                    <h3>{item.name}</h3>
                    <span>{item.branch}, {item.section}</span>
                  </div>
                </div>
                <p>{item.feed}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button className="show-more-btn" onClick={handleShowMore}>
        Show More
      </button>
    </div>
  );
};

export default Testimonials;
