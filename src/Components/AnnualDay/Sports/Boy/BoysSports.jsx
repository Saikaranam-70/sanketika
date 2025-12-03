import React, { useState } from "react";
import "./BoysSports.css";
import { useNavigate } from "react-router-dom";
import qrImage from '../../../../assets/upi.png'

const BoysSports = () => {
  const [selectedSport, setSelectedSport] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showQR, setShowQR] = useState(false);

  const navigate = useNavigate();
  const [captainName, setCaptainName] = useState("");
  const [captainPhone, setCaptainPhone] = useState("");

  // Replace with your QR image URL
  // const qrImage = "https://your-qr-image-url.png"; 
  const paymentAmount = 1000;

  // Google Form URLs
  const formUrls = {
    cricket:
      "https://docs.google.com/forms/d/e/1FAIpQLSdwRhoT7PuXOcpgIgbEQEp1r7LRTZ9ohOiqpQIwhY3NkIpJPQ/viewform?usp=publish-editor",
    volleyball:
      "https://docs.google.com/forms/d/e/1FAIpQLScOIcwINRngBlB9MpRcTqBLNnfWQQy1t11Q4-gJQ1iuhwhJ0A/viewform?usp=publish-editor",
  };

  const handleCricketPayment = () => {
    setShowQR(true); // open QR popup
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
  };

  return (
    <>
      {/* QR PAYMENT POPUP */}
      {showQR && (
        <div className="qr-overlay">
          <div className="qr-popup">
            <h2>Scan & Pay</h2>
            <p className="qr-amount">Amount: ₹{paymentAmount}</p>

            <img src={qrImage} alt="UPI QR Code" className="qr-image" />

            <p className="qr-note">
              After payment, take a screenshot and upload it in the form along with UTR Number.
            </p>

            <button
              className="fill-form-button"
              onClick={() => {
                window.open(formUrls.cricket, "_blank");
                setShowQR(false);
              }}
            >
              I Completed Payment → Fill Form
            </button>

            <button className="qr-close" onClick={() => setShowQR(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* MAIN PAGE */}
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
              {/* Cricket Card */}
              <div
                className={`sport-card ${
                  selectedSport === "cricket" ? "selected" : ""
                }`}
              >
                <div className="sport-icon">🏏</div>
                <h3 className="sport-name">Cricket</h3>
                <p className="sport-description">
                  Join the cricket team and showcase your batting and bowling
                  skills
                </p>

                {/* PAYMENT BUTTON */}
                <button className="payment-button" onClick={handleCricketPayment}>
                  💳 Pay ₹1000
                </button>

                {/* FILL FORM BUTTON */}
                {/* <div className="select-indicator">
                  <button
                    className="fill-form-button"
                    onClick={() => window.open(formUrls.cricket, "_blank")}
                  >
                    📝 Fill Form
                  </button>
                </div> */}
              </div>

              {/* Volleyball Card */}
              <div
                className={`sport-card ${
                  selectedSport === "volleyball" ? "selected" : ""
                }`}
                onClick={() => window.open(formUrls.volleyball, "_blank")}
              >
                <div className="sport-icon">🏐</div>
                <h3 className="sport-name">Volleyball</h3>
                <p className="sport-description">
                  Show your teamwork and spiking skills on the volleyball court
                </p>
                <div className="select-indicator">
                  {selectedSport === "volleyball"
                    ? "✓ Selected"
                    : "Click to select"}
                </div>
              </div>
            </div>
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
          </div>
        )}
      </div>
    </>
  );
};

export default BoysSports;
