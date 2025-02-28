import React from 'react';
import './Cme.css'; // Import CSS for styling
import Footer from '../../Footer/Footer';

const Cme = () => {
  const cmeData = [
    {
      title: 'What is Computer Engineering?',
      content:
        'Computer Engineering is a discipline that integrates electrical engineering and computer science to develop computer hardware and software. It involves designing and building computers, embedded systems, and networks, as well as developing software applications and algorithms.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60', // Image of computer hardware
    },
    {
      title: 'Applications of Computer Engineering',
      content:
        'Computer Engineering is applied in various fields, including robotics, artificial intelligence, cybersecurity, and IoT (Internet of Things). It powers technologies like smartphones, autonomous vehicles, and cloud computing. Computer engineers also work on developing operating systems, compilers, and network protocols.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=60', // Image of AI and robotics
    },
    {
      title: 'Career Opportunities in Computer Engineering',
      content:
        'Computer Engineering offers diverse career opportunities, including roles like Software Engineer, Hardware Engineer, Systems Architect, and Data Scientist. Professionals can work in tech giants like Google, Microsoft, and Apple, or in startups, research institutions, and government agencies.',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&auto=format&fit=crop&q=60', // Image of professionals working
    },
    {
      title: 'Future Trends in Computer Engineering',
      content:
        'The future of Computer Engineering is driven by advancements in quantum computing, AI, and machine learning. Edge computing, 5G networks, and blockchain technology are also shaping the industry. Computer engineers are at the forefront of developing sustainable and energy-efficient computing solutions.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60', // Image of futuristic technology
    },
    {
      title: 'Skills Required for Computer Engineers',
      content:
        'Computer engineers need strong programming skills in languages like Python, C++, and Java. They must also have a solid understanding of computer architecture, algorithms, and data structures. Problem-solving, creativity, and teamwork are essential traits for success in this field.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60', // Image of coding and programming
    },
    {
      title: 'Impact of Computer Engineering on Society',
      content:
        'Computer Engineering has revolutionized the way we live, work, and communicate. It has enabled innovations like the internet, smartphones, and social media, transforming industries and creating new opportunities. Computer engineers also address global challenges like cybersecurity threats and digital inequality.',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500&auto=format&fit=crop&q=60', // Image of digital transformation
    },
  ];

  return (
    <>
    <div className="cme-container">
      <h1 className="cme-title">Computer Engineering: Shaping the Digital World</h1>
      <div className="cme-grid">
        {cmeData.map((item, index) => (
          <div key={index} className="cme-card">
            <img src={item.image} alt={item.title} className="cme-image" />
            <div className="cme-content">
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

export default Cme;