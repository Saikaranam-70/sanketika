import React, { useState } from 'react';
import './Transportation.css';
import bus1 from '../../assets/bus1.webp'; // Add your image paths
import bus2 from '../../assets/bus2.webp';
import bus3 from '../../assets/bus3.webp';
import bus4 from '../../assets/bus4.webp';
import bus5 from '../../assets/bus5.webp';
import bus6 from '../../assets/bus6.webp';
import bus7 from '../../assets/bus7.webp';
import bus8 from '../../assets/bus8.webp';
import bus9 from '../../assets/bus9.webp';
import bus10 from '../../assets/bus10.webp';

// Import PDF files for routes
import malakapuramPdf from '../../assets/pdfs/MALAKAPURAM.pdf';
import bheemliPdf from '../../assets/pdfs/bheemli.pdf';
import gopalapatnamPdf from '../../assets/pdfs/GOPALAPATNAM.pdf';
import simhachalamPdf from '../../assets/pdfs/simhachalam.pdf';
import pendurthiPdf from '../../assets/pdfs/PENDUTHI.pdf';
import aganampudiPdf from '../../assets/pdfs/AGANAMPUDI.pdf';
import railwayNewColonyPdf from '../../assets/pdfs/RLY NEW COLONY.pdf';
import chinnaMushurawadaPdf from '../../assets/pdfs/china-mushirawada.pdf';
import andalammaClgPdf from '../../assets/pdfs/ANDALAMMA.pdf';
import thatichetlaPalemPdf from '../../assets/pdfs/THATICHETLAPALEM.pdf';
import Footer from '../Footer/Footer';

const Transportation = () => {
  const [activeTab, setActiveTab] = useState('transportation');
  const [selectedPdf, setSelectedPdf] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSelectedPdf(null); // Reset PDF when switching tabs
  };

  const routeButtons = [
    { name: 'Malakapuram', pdf: malakapuramPdf },
    { name: 'Bheemli', pdf: bheemliPdf },
    { name: 'Gopalapatnam', pdf: gopalapatnamPdf },
    { name: 'Simhachalam', pdf: simhachalamPdf },
    { name: 'Pendurthi', pdf: pendurthiPdf },
    { name: 'Aganampudi', pdf: aganampudiPdf },
    { name: 'Railway New Colony', pdf: railwayNewColonyPdf },
    { name: 'Chinna Mushurawada', pdf: chinnaMushurawadaPdf },
    { name: 'Andalamma Clg', pdf: andalammaClgPdf },
    { name: 'Thatichetla Palem', pdf: thatichetlaPalemPdf },
  ];

  const galleryImages = [
    bus1,
    bus2,
    bus3,
    bus4,
    bus5,
    bus6,
    bus7,
    bus8,
    bus9,
    bus10,
  ];

  return (
    <>
    <div className="transportation-container">
      <div className="tabs">
        <button
          className={activeTab === 'transportation' ? 'active' : ''}
          onClick={() => handleTabClick('transportation')}
        >
          Transportation
        </button>
        <button
          className={activeTab === 'route-maps' ? 'active' : ''}
          onClick={() => handleTabClick('route-maps')}
        >
          Route Maps
        </button>
        <button
          className={activeTab === 'gallery' ? 'active' : ''}
          onClick={() => handleTabClick('gallery')}
        >
          Gallery
        </button>
      </div>

      <div className="content">
        {activeTab === 'transportation' && (
          <div className="transportation-content">
            <h2>Transportation Facilities at Sanketika Polytechnic College</h2>
            <p>
              Sanketika Polytechnic College (SPC) provides efficient and well-organized transportation facilities to ensure a hassle-free commute for students and staff. The college operates a fleet of well-maintained buses that cover multiple routes across Visakhapatnam and its surrounding areas.
            </p>
            <h3>Key Features of SPC’s Transportation Services:</h3>
            <ul>
              <li>
                <strong>Wide Route Coverage:</strong> The buses operate on various routes, making it convenient for students from different locations to reach the campus on time.
              </li>
              <li>
                <strong>Safety & Comfort:</strong> All buses are driven by experienced and licensed drivers, ensuring a safe and smooth journey. The vehicles are regularly serviced and maintained to meet safety standards.
              </li>
              <li>
                <strong>Punctuality & Convenience:</strong> The transportation schedule is carefully planned to accommodate class timings, reducing travel stress and ensuring timely arrivals and departures.
              </li>
              <li>
                <strong>Affordable & Accessible:</strong> The college offers transportation at a reasonable cost, making it an economical option for students.
              </li>
            </ul>
            <p>
              By providing these reliable transportation facilities, SPC aims to support students in focusing on their academics without the worry of daily commuting challenges.
            </p>
          </div>
        )}

        {activeTab === 'route-maps' && (
          <div className="route-maps-content">
            <h2>Route Maps</h2>
            <div className="route-buttons">
              {routeButtons.map((route, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedPdf(route.pdf)}
                >
                  {route.name}
                </button>
              ))}
            </div>
            <div className="pdf-viewer">
              {selectedPdf ? (
                <iframe
                  src={selectedPdf}
                  width="100%"
                  height="500px"
                  title="PDF Viewer"
                ></iframe>
              ) : (
                <p>Select a route to view the PDF.</p>
              )}
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="gallery-content">
            <h2>Gallery</h2>
            <div className="gallery-images">
              {galleryImages.map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image} alt={`Bus ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Transportation;