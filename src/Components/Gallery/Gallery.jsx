import React from "react";
import "./Gallery.css";
import gallery_1 from "../../assets/clg1.webp";
import gallery_2 from "../../assets/clg2.webp";
import gallery_3 from "../../assets/clg3.webp";
import gallery_4 from "../../assets/clg4.webp";
import gallery_5 from "../../assets/clg5.webp";
import gallery_6 from "../../assets/clg6.webp";
import gallery_7 from "../../assets/clg7.webp";
import gallery_8 from "../../assets/clg8.webp";
import gallery_9 from "../../assets/lab1.webp";
import gallery_10 from "../../assets/logo2.webp";
import gallery_11 from "../../assets/mech-lab.webp";
import gallery_12 from "../../assets/sankethika-hero.webp";
import gallery_13 from "../../assets/pic1.webp";
import gallery_14 from "../../assets/pic2.webp";
import gallery_15 from "../../assets/pic3.webp";
import gallery_16 from "../../assets/pic4.webp";
import gallery_17 from "../../assets/pic5.webp";
import gallery_18 from "../../assets/pic6.webp";
import gallery_19 from "../../assets/pic1.webp";
import gallery_20 from "../../assets/pic9.webp";
import gallery_21 from "../../assets/pic10.webp";
import Footer from "../Footer/Footer";




const images = [gallery_1, gallery_2, gallery_3, gallery_4, gallery_5, gallery_6, gallery_7, gallery_8, gallery_9, gallery_10, gallery_11, gallery_12, gallery_13, gallery_14, gallery_15, gallery_16, gallery_17, gallery_18, gallery_19, gallery_20, gallery_21];

const Gallery = () => {
  return (
    <>
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
    <Footer />
    </>
  );
};

export default Gallery;
