import React from 'react';
import './Mech.css'; // Import CSS for styling
import Footer from '../../Footer/Footer';

const Mech = () => {
  const mechData = [
    {
      title: 'What is Mechanical Engineering?',
      content:
        'Mechanical Engineering is a branch of engineering that focuses on the design, analysis, manufacturing, and maintenance of mechanical systems. It involves the application of physics, mathematics, and material science to create innovative solutions for real-world problems.',
      image: 'https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=500&auto=format&fit=crop&q=60', // Lightweight image
    },
    {
      title: 'Applications of Mechanical Engineering',
      content:
        'Mechanical Engineering is applied in industries like automotive, aerospace, energy, and robotics. It powers innovations in engines, turbines, HVAC systems, and manufacturing processes. Mechanical engineers also work on renewable energy systems and automation technologies.',
      image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=500&auto=format&fit=crop&q=60', // Lightweight image
    },
    {
      title: 'Career Opportunities in Mechanical Engineering',
      content:
        'Mechanical engineers can work as Design Engineers, Manufacturing Engineers, Project Managers, and Research Engineers. Companies like Tesla, Boeing, and General Electric hire mechanical engineers for roles in innovation and production.',
      image: 'https://images.unsplash.com/photo-1538332576228-eb5b4c4de6f5?w=500&auto=format&fit=crop&q=60', // Lightweight image
    },
    {
      title: 'Future Trends in Mechanical Engineering',
      content:
        'The future of Mechanical Engineering is driven by advancements in 3D printing, nanotechnology, and smart materials. Engineers are also focusing on sustainable energy solutions, electric vehicles, and AI-driven automation.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&auto=format&fit=crop&q=60', // Lightweight image
    },
    {
      title: 'Skills Required for Mechanical Engineers',
      content:
        'Mechanical engineers need strong analytical, problem-solving, and technical skills. Proficiency in CAD software, knowledge of thermodynamics, and expertise in material science are essential. Communication and teamwork skills are also crucial for collaboration.',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop&q=60', // Lightweight image
    },
    {
      title: 'Impact of Mechanical Engineering on Society',
      content:
        'Mechanical Engineering has transformed industries by enabling mass production, efficient transportation, and advanced manufacturing. It has also contributed to innovations in renewable energy, healthcare devices, and space exploration.',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60', // Lightweight image
    },
  ];

  return (
    <>
    <div className="mech-container">
      <h1 className="mech-title">Mechanical Engineering: Innovating the Future</h1>
      <div className="mech-grid">
        {mechData.map((item, index) => (
          <div key={index} className="mech-card">
            <img src={item.image} alt={item.title} className="mech-image" />
            <div className="mech-content">
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

export default Mech;