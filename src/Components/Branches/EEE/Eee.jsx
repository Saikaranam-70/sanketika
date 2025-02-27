import React from 'react';
import './Eee.css'; // Import CSS for styling

const Eee = () => {
  const eeeData = [
    {
      title: 'What is Electrical and Electronics Engineering?',
      content:
        'Electrical and Electronics Engineering (EEE) is a field of engineering that deals with the study and application of electricity, electronics, and electromagnetism. It involves designing, developing, and maintaining electrical systems and electronic devices.',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=500&auto=format&fit=crop&q=60', // Image of electrical circuits
    },
    {
      title: 'Applications of EEE',
      content:
        'EEE is applied in power generation, telecommunications, robotics, and consumer electronics. It powers innovations in renewable energy systems, smart grids, and IoT devices. EEE engineers also work on embedded systems and control systems.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&auto=format&fit=crop&q=60', // Image of power lines
    },
    {
      title: 'Career Opportunities in EEE',
      content:
        'EEE graduates can work as Electrical Engineers, Electronics Engineers, Power Systems Engineers, and Control Systems Engineers. Companies like Siemens, General Electric, and Intel hire EEE professionals for roles in innovation and production.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=60', // Image of engineers working
    },
    {
      title: 'Future Trends in EEE',
      content:
        'The future of EEE is driven by advancements in renewable energy, electric vehicles, and smart grids. Engineers are also focusing on AI-driven automation, IoT, and nanotechnology for next-generation electronics.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&auto=format&fit=crop&q=60', // Image of renewable energy
    },
    {
      title: 'Skills Required for EEE Engineers',
      content:
        'EEE engineers need strong skills in circuit design, programming, and signal processing. Proficiency in tools like MATLAB, AutoCAD, and PSpice is essential. Problem-solving, creativity, and teamwork are also crucial for success in this field.',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=500&auto=format&fit=crop&q=60', // Image of engineering tools
    },
    {
      title: 'Impact of EEE on Society',
      content:
        'EEE has revolutionized industries by enabling efficient power distribution, advanced communication systems, and smart technologies. It has also contributed to innovations in healthcare, transportation, and renewable energy.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&auto=format&fit=crop&q=60', // Image of smart city
    },
  ];

  return (
    <div className="eee-container">
      <h1 className="eee-title">Electrical and Electronics Engineering: Powering the Future</h1>
      <div className="eee-grid">
        {eeeData.map((item, index) => (
          <div key={index} className="eee-card">
            <img src={item.image} alt={item.title} className="eee-image" />
            <div className="eee-content">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Eee;