import React, { useEffect, useState } from 'react';
import './Hero.css';
import Navbar from '../Navbar/Navbar';
import 'aos/dist/aos.css';
import Aos from 'aos';
import qrImage from '../../assets/upi.png'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const [showQR, setShowQR] = useState(false);
  const [amount, setAmount] = useState(0);

  const [showPrimaryPopup, setShowPrimaryPopup] = useState(false);
  const [showSportsPopup, setShowSportsPopup] = useState(false);
  const [showGenderPopup, setShowGenderPopup] = useState(false);
  const [isBoys, setIsBoys] = useState(false);

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
      {/* ✅ CULTURAL PAYMENT POPUP */}
      {showQR && (
        <div className="qr-overlay">
          <div className="qr-popup">
            <h2>Cultural Event Payment</h2>

            {amount === 0 ? (
              <>
                <p className="qr-choose">Select Event Type:</p>

                <button className="qr-option" onClick={() => setAmount(50)}>
                  Solo Event – ₹50
                </button>

                <button className="qr-option" onClick={() => setAmount(100)}>
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
                  After payment, upload screenshot + UTR in the form.
                </p>

                <button
                  className="fill-form-button"
                  onClick={() => {
                    window.open("https://docs.google.com/forms/d/e/1FAIpQLSejh68XawJOcyCHfYioD1ME4WRstz4WeJXIdOQjsJ4JsYA5AQ/viewform", "_blank");
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

      {/* ✅ PRIMARY SCHOOL POPUP */}
      {showPrimaryPopup && (
        <div className="qr-overlay">
          <div className="qr-popup">
            <h2>Primary School Events</h2>

            <button className="qr-option" onClick={()=>window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLScSBVQe2Cp42bR0zlAfiRHzP70ka2_TEFNPkYpxlY25YtYvFw/viewform?usp=publish-editor", "_blank"
            )}>Science Exhibition</button>

            <button
              className="qr-option"
              onClick={() => {
                setShowPrimaryPopup(false);
                setShowSportsPopup(true);
              }}
            >
              Sports
            </button>

            <button className="qr-close" onClick={() => setShowPrimaryPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* ✅ SPORTS GENDER POPUP */}
      {showSportsPopup && (
        <div className="qr-overlay">
          <div className="qr-popup">
            <h2>Select Category</h2>

            <button
              className="qr-option"
              onClick={() => {
                setIsBoys(true);
                setShowSportsPopup(false);
                setShowGenderPopup(true);
              }}
            >
              Boys
            </button>

            <button
              className="qr-option"
              onClick={() => {
                setIsBoys(false);
                setShowSportsPopup(false);
                setShowGenderPopup(true);
              }}
            >
              Girls
            </button>

            <button className="qr-close" onClick={() => setShowSportsPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* ✅ FINAL SPORTS GAME POPUP */}
      {showGenderPopup && (
        <div className="qr-overlay">
          <div className="qr-popup">
            <h2>{isBoys ? "Boys Sports" : "Girls Sports"}</h2>

            {isBoys ? (
              <>
                <button className="qr-option" onClick={()=> {
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSdI4ZZ6LdxulwgzSClbCdxrCedMB5_s9pm3GhALFFL4fT8LpA/viewform?usp=header","_blank"
                  )
                }}>Cricket</button>
                <button className="qr-option" onClick={()=>{
                  window.open("https://docs.google.com/forms/d/e/1FAIpQLSeZ8ved06zNt683r1bMjrelG5mEesxWxjaGmC8tiVaWNkvlNQ/viewform?usp=header","_blank")
                }}>Kabaddi</button>
                <button className="qr-option" onClick={()=>{
                  window.open("https://docs.google.com/forms/d/e/1FAIpQLSdb1qUZR_JEPCJOcGxBJ1cyrVxpcKM88JieiDVe3P_EHivciw/viewform?usp=header", "_blank")
                }}>Volleyball</button>
              </>
            ) : (
              <>
                <button className="qr-option" onClick={()=>{
                  window.open("https://docs.google.com/forms/d/e/1FAIpQLSfJAsD5d7PH0URsHDDmSwLmP66aTUABopRa7YKzydLMovD61g/viewform?usp=header", "_blank")
                }}>Kho Kho</button>
                <button className="qr-option" onClick={()=>{
                  window.open("https://docs.google.com/forms/d/e/1FAIpQLSdonW8EMzBbOn5VSBcE1vhcWZysxk-0eIzQPTdu5Oq8y4LBhw/viewform?usp=header", "_blank")
                }}>Throwball</button>
              </>
            )}

            <button className="qr-close" onClick={() => setShowGenderPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* ✅ MAIN HERO */}
      <div className="home">
        <div className="home-section">
          <h1 className="head">Sanketika Annual Day Cultural Events</h1>

          <div className="events">
            <button className="event1" onClick={() => navigate("/annual-day/techeventsregistration")}>
              Tech Events
            </button>

            <button className="event2" onClick={openCulturalPayment}>
              Cultural Events
            </button>

            <button className="event3" onClick={() => navigate("/annual-day/sportsregisration")}>
              Sports
            </button>

            <button className="event4" onClick={() => setShowPrimaryPopup(true)}>
              Primary Schools
            </button>

            <button
              className="event5"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSeakGS5ygKwTjmKDY_OAUDjtrPqDygXBmlRYol4oui7T03Xjg/viewform",
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
