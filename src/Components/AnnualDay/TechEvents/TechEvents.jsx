
import React from "react";
import "./TechEvents.css";

const TechEvents = () => {
  return (
    <div className="tech-container">
      <h1 className="tech-title">Technical Events</h1>
      <p className="tech-subtitle">Choose an event to participate in</p>

      <div className="tech-buttons">
        <button className="tech-btn">
          <span className="tech-icon">📄</span>
          Paper Presentation
        </button>

        <button className="tech-btn" onClick={()=> window.location.href="https://docs.google.com/forms/d/e/1FAIpQLSe5o_XicHwnWfwDe9H6LlCgGFZxwFyjXYuVWjZjyseRvd86ZQ/viewform?usp=publish-editor"}>
          <span className="tech-icon">🖼️</span>
          Poster Presentation
        </button>

        <button className="tech-btn">
          <span className="tech-icon">💡</span>
          Project Expo
        </button>
      </div>
    </div>
  );
};

export default TechEvents;
