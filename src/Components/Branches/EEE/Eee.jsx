import React from 'react';
import './Eee.css'; // Import CSS for styling

const Eee = () => {
  const eeeData = [
    {
      title: 'What is Electrical and Electronics Engineering?',
      content:
        'Electrical and Electronics Engineering (EEE) is a field of engineering that deals with the study and application of electricity, electronics, and electromagnetism. It involves designing, developing, and maintaining electrical systems and electronic devices.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60', // Lightweight image
    },
    {
      title: 'Applications of EEE',
      content:
        'EEE is applied in power generation, telecommunications, robotics, and consumer electronics. It powers innovations in renewable energy systems, smart grids, and IoT devices. EEE engineers also work on embedded systems and control systems.',
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500&auto=format&fit=crop&q=60', // Lightweight image
    },
    {
      title: 'Career Opportunities in EEE',
      content:
        'EEE graduates can work as Electrical Engineers, Electronics Engineers, Power Systems Engineers, and Control Systems Engineers. Companies like Siemens, General Electric, and Intel hire EEE professionals for roles in innovation and production.',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&auto=format&fit=crop&q=60', // Lightweight image
    },
    {
      title: 'Future Trends in EEE',
      content:
        'The future of EEE is driven by advancements in renewable energy, electric vehicles, and smart grids. Engineers are also focusing on AI-driven automation, IoT, and nanotechnology for next-generation electronics.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60', // Lightweight image
    },
    {
      title: 'Skills Required for EEE Engineers',
      content:
        'EEE engineers need strong skills in circuit design, programming, and signal processing. Proficiency in tools like MATLAB, AutoCAD, and PSpice is essential. Problem-solving, creativity, and teamwork are also crucial for success in this field.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60', // Lightweight image
    },
    {
      title: 'Impact of EEE on Society',
      content:
        'EEE has revolutionized industries by enabling efficient power distribution, advanced communication systems, and smart technologies. It has also contributed to innovations in healthcare, transportation, and renewable energy.',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500&auto=format&fit=crop&q=60', // Lightweight image
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