
import React from "react";
import "./TechEvents.css";

const TechEvents = () => {
  return (
    <div className="tech-container">
      <h1 className="tech-title">Technical Events</h1>
      <p className="tech-subtitle">Choose an event to participate in</p>

      <div className="tech-buttons">
        <button className="tech-btn" onClick={()=>{
          window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLSeDSCydRd25z56iiLRrzlgcdP0KBLRGZcUnKU000BT9A5Hc5Q/viewform?usp=publish-editor",
            "_blank"
          )
        }}>
          <span className="tech-icon">📄</span>
          Paper Presentation
        </button>

        <button className="tech-btn" onClick={()=>{
          window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLSe5o_XicHwnWfwDe9H6LlCgGFZxwFyjXYuVWjZjyseRvd86ZQ/viewform?usp=publish-editor",
            "_blank"
          )
        }}>
          <span className="tech-icon">🖼️</span>
          Poster Presentation
        </button>

        <button className="tech-btn" onClick={()=>{
          window.open(
            "https://docs.google.com/forms/d/e/1FAIpQLSeSofwN4c-KAI-q-P75AOQnkWTkXTyusnb5DSx3GJbGN-YsaQ/viewform?usp=publish-editor",
            "_blank"
          )
        }}>
          <span className="tech-icon">💡</span>
          Project Expo
        </button>
      </div>
    </div>
  );
};

export default TechEvents;
