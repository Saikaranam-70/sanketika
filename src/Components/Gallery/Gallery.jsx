import React from "react";
import "./Gallery.css";
import gallery_1 from "../../assets/clg1.jpeg";
import gallery_2 from "../../assets/clg2.jpeg";
import gallery_3 from "../../assets/clg3.jpeg";
import gallery_4 from "../../assets/clg4.jpeg";
import gallery_5 from "../../assets/clg5.jpeg";
import gallery_6 from "../../assets/clg6.jpeg";
import gallery_7 from "../../assets/clg7.jpeg";
import gallery_8 from "../../assets/clg8.jpeg";
import gallery_9 from "../../assets/lab1.jpeg";
import gallery_10 from "../../assets/logo2.png";
import gallery_11 from "../../assets/mech-lab.jpeg";
import gallery_12 from "../../assets/sankethika-hero.jpeg";

const images = [gallery_1, gallery_2, gallery_3, gallery_4, gallery_5, gallery_6, gallery_7, gallery_8, gallery_9, gallery_10, gallery_11, gallery_12];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2 className="gallery-title">College Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
