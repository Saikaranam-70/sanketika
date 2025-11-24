import React from 'react';
import './Sport.css';
import { useNavigate } from 'react-router';

const Sport = () => {
    const navigate = useNavigate()
  return (
    <div className="sport-container">
      <div className="sport-header">
        <h1 className="sport-title">Sports Selection</h1>
        <p className="sport-subtitle">Choose your category</p>
      </div>
      
      <div className="options">
        <button className="option-btn girl-btn">
          <span className="btn-icon">♀</span>
          <span className="btn-text">Girls</span>
        </button>
        
        <button className="option-btn boy-btn" onClick={()=>navigate("/annual-day/sportsregisration/boys")}>
          <span className="btn-icon">♂</span>
          <span className="btn-text" >Boys</span>
        </button>
      </div>
    </div>
  );
}

export default Sport;