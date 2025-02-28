import React, { useState } from 'react';
import './Placements.css';
import pl1 from '../../assets/pl1.webp'; // Add your image paths
import pl2 from '../../assets/pl2.webp';
import pl3 from '../../assets/pl3.webp';
import pl4 from '../../assets/pl4.webp';
import pl5 from '../../assets/pl5.webp';
import pl6 from '../../assets/pl6.webp';
import pl7 from '../../assets/pl7.webp';
import pl8 from '../../assets/pl8.webp';
import pl9 from '../../assets/pl9.webp';
import pl10 from '../../assets/pl10.webp';
import companyBanner from '../../assets/company-banner.webp'; // Banner image for Companies section

// Import PDF files
import report2024 from '../../assets/pdfs/pd1.pdf';
import report2023 from '../../assets/pdfs/pd2.pdf';
import report2022 from '../../assets/pdfs/pd1.pdf';
import Footer from '../Footer/Footer';

const Placements = () => {
  const [activeTab, setActiveTab] = useState('placements');
  const [selectedPdf, setSelectedPdf] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSelectedPdf(null); // Reset PDF when switching tabs
  };

  const placementData = [
    {
      year: '2024-2025',
      data: [
        { company: 'TECHVOL', payScale: '2.35 LPA + ACCOMODATION', selects: 17 },
        { company: 'NUMAX SYSTEMS, VIZAG', payScale: '2.6 LPA + ACCOMODATION', selects: 27 },
        { company: 'HETERO, HYD', payScale: '2.6 LPA + ACCOMODATION', selects: 45 },
        { company: 'TESSOLVE', payScale: '3.2 LPA + ACCOMODATION', selects: 47 },
        { company: 'EPISOURCES', payScale: '3.0 LPA + ACCOMODATION', selects: 25 },
        { company: 'APOLLO TYRES', payScale: '2.45 LPA + ACCOMODATION', selects: 52 },
        { company: 'SKIDETAIL', payScale: '2.45 LPA + ACCOMODATION', selects: 6 },
        { company: 'TAODIGITAL', payScale: '2.6 LPA + ACCOMODATION', selects: 9 },
      ],
      averagePackage: '2.45 LPA',
      totalSelects: 228,
    },
    {
      year: '2023-2024',
      data: [
        { company: 'JOHN DEERE – PUNE', payScale: '2.2 LPA + ACCOMODATION', selects: 68 },
        { company: 'BAJAJ 2 WHEELER AUTOMOTIVES', payScale: '2.25 LPA + ACCOMODATION', selects: 16 },
        { company: 'EFFTRONICS LTD', payScale: '2.25 LPA + FOOD + INSURANCE', selects: 21 },
        { company: 'SPR CAPITAL LTD', payScale: '2.85 LPA + TRAVEL ALLOWANCE', selects: 48 },
        { company: 'SKI DETAIL – CIVIL', payScale: '2.25 LPA + TRAVEL ALLOWANCE', selects: 12 },
        { company: 'VARUN MOTARS', payScale: '2.5 LPA + TRAVEL ALLOWANCE', selects: 16 },
        { company: 'SAINT GOBAIN GLASS', payScale: '2.45 LPA + FOOD + INSURANCE', selects: 36 },
      ],
      averagePackage: '2.4 LPA',
      totalSelects: 217,
    },
    {
      year: '2022-2023',
      data: [
        { company: 'SRMY TATA MOTORS', payScale: '1.8 LPA + FOOD', selects: 8 },
        { company: 'MANDO AUTOMOTIVES', payScale: '2.2 LPA + ACCOMODATION', selects: 142 },
        { company: 'EFFTRONICS LTD', payScale: '2.25 LPA + FOOD + INSURANCE', selects: 21 },
        { company: 'SPR CAPITAL LTD', payScale: '2.85 LPA + TRAVEL ALLOWANCE', selects: 48 },
        { company: 'SKI DETAIL – CIVIL', payScale: '2.25 LPA + TRAVEL ALLOWANCE', selects: 12 },
        { company: 'CLASSIQUES TECHNOLOGIES', payScale: '2.1 LPA + TARGET BENIFITS', selects: 6 },
        { company: 'DR. REDDYS – VIZAG PLANT', payScale: '2.25 LPA + FOOD + INSURANCE', selects: 12 },
        { company: 'SCRANO TECH', payScale: '2.35 LPA + TRAVEL ALLOWANCE', selects: 10 },
      ],
      averagePackage: '2.2 LPA',
      totalSelects: 259,
    },
  ];

  const galleryImages = [
    { src: pl1, name: 'pl1' },
    { src: pl2, name: 'pl2' },
    { src: pl3, name: 'pl3' },
    { src: pl4, name: 'pl4' },
    { src: pl5, name: 'pl5' },
    { src: pl6, name: 'pl6' },
    { src: pl7, name: 'pl7' },
    { src: pl8, name: 'pl8' },
    { src: pl9, name: 'pl9' },
    { src: pl10, name: 'pl10' },
  ];

  return (
    <>
    <div className="placements-container">
      <div className="tabs">
        <button
          className={activeTab === 'placements' ? 'active' : ''}
          onClick={() => handleTabClick('placements')}
        >
          Placements
        </button>
        <button
          className={activeTab === 'gallery' ? 'active' : ''}
          onClick={() => handleTabClick('gallery')}
        >
          Placement Gallery
        </button>
        <button
          className={activeTab === 'companies' ? 'active' : ''}
          onClick={() => handleTabClick('companies')}
        >
          Companies
        </button>
      </div>

      <div className="content">
        {activeTab === 'placements' && (
          <div className="placements-content">
            <h2>SPC Placements</h2>
            {placementData.map((placement, index) => (
              <div key={index} className="placement-year">
                <h3>SPC PLACEMENTS DURING {placement.year}</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Name of the Company</th>
                      <th>Pay Scale per annum</th>
                      <th>Selects</th>
                    </tr>
                  </thead>
                  <tbody>
                    {placement.data.map((row, idx) => (
                      <tr key={idx}>
                        <td>{row.company}</td>
                        <td>{row.payScale}</td>
                        <td>{row.selects}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="2">Average Package: {placement.averagePackage}</td>
                      <td>Total as on date: {placement.totalSelects}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            ))}
            <div className="pdf-section">
              <h3>Placement Reports (PDFs)</h3>
              <p>Click below to view placement reports:</p>
              <div className="pdf-buttons">
                <button onClick={() => setSelectedPdf(report2024)}>
                  2024-2025 Report
                </button>
                <button onClick={() => setSelectedPdf(report2023)}>
                  2023-2024 Report
                </button>
                <button onClick={() => setSelectedPdf(report2022)}>
                  2022-2023 Report
                </button>
              </div>
              {selectedPdf && (
                <div className="pdf-viewer">
                  <iframe
                    src={selectedPdf}
                    width="100%"
                    height="500px"
                    title="PDF Viewer"
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="gallery-content">
            <h2>Placement Gallery</h2>
            <div className="gallery-images">
              {galleryImages.map((image, index) => (
                <div key={index} className="gallery-item">
                  <img src={image.src} alt={image.name} />
                  <p>{image.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'companies' && (
          <div className="companies-content">
            <h2>Companies</h2>
            <div className="company-banner">
              <img src={companyBanner} alt="Companies Banner" />
            </div>
          </div>
        )}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Placements;