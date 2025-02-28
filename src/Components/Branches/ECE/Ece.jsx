import React from 'react';
import './Ece.css'; // Import CSS for styling
import Footer from '../../Footer/Footer';

const Ece = () => {
  const eceData = [
    {
      title: 'What is Electronics and Communication Engineering?',
      content:
        'ECE focuses on electronic devices, circuits, communication equipment like transmitter, receiver, and integrated circuits. It also involves the design and maintenance of communications systems.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475', // Electronics
    },
    {
      title: 'Applications of ECE',
      content:
        'ECE is applied in various fields like telecommunications, satellite communication, mobile networks, and embedded systems. It powers innovations in smart devices and wireless technology.',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e', // Communication
    },
    {
      title: 'Career Opportunities in ECE',
      content:
        'Graduates can work as Communication Engineers, Network Engineers, Signal Processing Engineers, and VLSI Designers. Companies like Qualcomm, Intel, and Cisco hire ECE professionals.',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb', // Career
    },
    {
      title: 'Future Trends in ECE',
      content:
        'The future of ECE lies in 5G networks, IoT, AI hardware, and satellite technology. Engineers are also working on energy-efficient communication systems.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c', // Future
    },
    {
      title: 'Skills Required for ECE',
      content:
        'ECE engineers need strong skills in programming languages like C/C++, MATLAB, and VHDL. They must understand analog/digital circuits, signal processing, and wireless communication.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085', // Skills
    },
    {
      title: 'Impact of ECE on Society',
      content:
        'ECE has revolutionized communication through mobile networks, internet connectivity, and smart devices, enabling global connectivity and rapid information exchange.',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935', // Impact
    },
  ];

  return (
    <>
    <div className="ece-container">
      <h1 className="ece-title">Electronics and Communication Engineering: Connecting the World</h1>
      <div className="ece-grid">
        {eceData.map((item, index) => (
          <div key={index} className="ece-card">
            <img src={item.image} alt={item.title} className="ece-image" />
            <div className="ece-content">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Ece;