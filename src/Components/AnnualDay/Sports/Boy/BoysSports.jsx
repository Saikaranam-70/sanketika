import React, { useState } from 'react';
import './BoysSports.css';
import { useNavigate } from 'react-router';

const BoysSports = () => {
  const [selectedSport, setSelectedSport] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate()
  // Google Form URLs (replace with your actual form URLs)
  const formUrls = {
    cricket: "https://docs.google.com/forms/d/e/1FAIpQLSd0HV0dwXhSmiaxFr3pUVIqOTnhzP9PftVo9CZfS4buwPs3sQ/viewform?usp=dialog",
    volleyball: "https://docs.google.com/forms/d/e/1FAIpQLSdEXAMPLE_VOLLEYBALL_FORM/viewform?embedded=true"
  };

  const handleSportSelect = (sport) => {
    setSelectedSport(sport);
    setShowForm(true);
  };

  const handleBackToSports = () => {
    setSelectedSport(null);
    setShowForm(false);
  };

  const handleBackToGender = () => {
    setSelectedSport(null);
    setShowForm(false);
    // You can add callback to parent component here if needed
  };

  return (
    <div className="boys-sports-container">
      {/* Header */}
      <div className="sports-header">
        <button className="back-button" onClick={handleBackToGender}>
          ← Back
        </button>
        <h1 className="sports-title">Boys Sports</h1>
        <p className="sports-subtitle">Choose your preferred sport</p>
      </div>

      {/* Sport Selection */}
      {!showForm && (
        <div className="sports-selection">
          <div className="sports-grid">
            <div 
              className={`sport-card ${selectedSport === 'cricket' ? 'selected' : ''}`}
            //   onClick={() => handleSportSelect('cricket')}
            onClick={()=>window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSd0HV0dwXhSmiaxFr3pUVIqOTnhzP9PftVo9CZfS4buwPs3sQ/viewform?usp=dialog"}
            >
              <div className="sport-icon">🏏</div>
              <h3 className="sport-name">Cricket</h3>
              <p className="sport-description">Join the cricket team and showcase your batting and bowling skills</p>
              <div className="select-indicator">
                {selectedSport === 'cricket' ? '✓ Selected' : 'Click to select'}
              </div>
            </div>

            <div 
              className={`sport-card ${selectedSport === 'volleyball' ? 'selected' : ''}`}
              onClick={() => handleSportSelect('volleyball')}
            >
              <div className="sport-icon">🏐</div>
              <h3 className="sport-name">Volleyball</h3>
              <p className="sport-description">Show your teamwork and spiking skills on the volleyball court</p>
              <div className="select-indicator">
                {selectedSport === 'volleyball' ? '✓ Selected' : 'Click to select'}
              </div>
            </div>
          </div>

          {selectedSport && (
            <div className="confirmation-section">
              <p>You selected: <strong>{selectedSport.toUpperCase()}</strong></p>
              <button 
                className="proceed-button"
                onClick={() => setShowForm(true)}
              >
                Proceed to Registration Form →
              </button>
            </div>
          )}
        </div>
      )}

      {/* Google Form */}
      {showForm && selectedSport && (
        <div className="form-container">
          <div className="form-header">
            <button className="back-button" onClick={handleBackToSports}>
              ← Back to Sports
            </button>
            <h2>{selectedSport.toUpperCase()} Registration Form</h2>
            <p>Please fill out the form below to complete your registration</p>
          </div>
          
          <div className="google-form-wrapper">
            <iframe
              src={formUrls[selectedSport]}
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title={`${selectedSport} Registration Form`}
              className="google-form"
            >
              Loading…
            </iframe>
          </div>

          <div className="form-footer">
            <p>Having trouble with the form? <a href={formUrls[selectedSport]} target="_blank" rel="noopener noreferrer">Open in new tab</a></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoysSports;