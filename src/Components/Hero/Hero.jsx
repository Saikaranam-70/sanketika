// import React from 'react'
// import './Hero.css'
// import dark_arrow from '../../assets/dark-arrow.png'
import { Link, useNavigate } from 'react-router-dom'

// const Hero = () => {
//   return (
//     <div className='hero container'>
//       <div className="hero-text">
//         <h1>We Ensure better education for a better world</h1>
//         <p>Our cutting-edge curriculum is designed to empower students with the 
//             knowledge, skills and experiences needed to excel in the dynamic field of education
//         </p>
//         
        
//         <button className="btn">Explore more <img src={dark_arrow} alt="" /> </button>
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default Hero
import React, { useEffect, useState } from 'react';
import './Hero.css';
import Navbar from '../Navbar/Navbar';
import 'aos/dist/aos.css';
import Aos from 'aos';
import qrImage from '../../assets/upi.png'
// import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const [showQR, setShowQR] = useState(false);
  const [amount, setAmount] = useState(0);

  // Replace with your QR image URL

  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  const openCulturalPayment = () => {
    setShowQR(true);
  };

  return (
    <>
      {/* QR PAYMENT POPUP */}
      {showQR && (
        <div className="qr-overlay">
          <div className="qr-popup">
            <h2>Cultural Event Payment</h2>

            {/* Choose Solo or Group */}
            {amount === 0 ? (
              <>
                <p className="qr-choose">Select Event Type:</p>

                <button
                  className="qr-option"
                  onClick={() => setAmount(50)}
                >
                  Solo Event – ₹50
                </button>

                <button
                  className="qr-option"
                  onClick={() => setAmount(100)}
                >
                  Group Event – ₹100
                </button>

                <button className="qr-close" onClick={() => setShowQR(false)}>
                  Close
                </button>
              </>
            ) : (
              <>
                <p className="qr-amount">Amount: ₹{amount}</p>

                <img src={qrImage} alt="QR Code" className="qr-image" />

                <p className="qr-note">
                  Scan & Pay using any UPI App.  
                  After payment, take a screenshot & upload it in the form along with the UTR Number.
                </p>

                <button
                  className="fill-form-button"
                  onClick={() => {
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLSejh68XawJOcyCHfYioD1ME4WRstz4WeJXIdOQjsJ4JsYA5AQ/viewform?usp=publish-editor",
                      "_blank"
                    );
                    setShowQR(false);
                    setAmount(0);
                  }}
                >
                  I Completed Payment → Open Form
                </button>

                <button
                  className="qr-close"
                  onClick={() => {
                    setShowQR(false);
                    setAmount(0);
                  }}
                >
                  Close
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* MAIN HERO SECTION */}

      <div className="home">
        <div className="home-section">
          <h1 className="head">Sanketika Annual Day Cultural Events</h1>

          <div className="events">
            <button
              className="event1"
              onClick={() => navigate("/annual-day/techeventsregistration")}
            >
              Tech Events
            </button>

            <button
              className="event2"
              onClick={openCulturalPayment}
            >
              Cultural Events
            </button>

            <button
              className="event3"
              onClick={() => navigate("/annual-day/sportsregisration")}
            >
              Sports
            </button>

            <button
              className="event4"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSeakGS5ygKwTjmKDY_OAUDjtrPqDygXBmlRYol4oui7T03Xjg/viewform?usp=publish-editor",
                  "_blank"
                )
              }
            >
              Student Co-ordinator Registration
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
