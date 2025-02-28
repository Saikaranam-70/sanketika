import React from 'react';
import './Civil.css'; // Import CSS for styling
import Footer from '../../Footer/Footer';

const Civil = () => {
  const civilData = [
    {
      title: 'What is Civil Engineering?',
      content:
        'Civil Engineering is a professional engineering discipline that deals with the design, construction, and maintenance of the physical and naturally built environment. This includes infrastructure such as roads, bridges, dams, airports, and buildings. Civil engineers ensure that structures are safe, sustainable, and functional.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&auto=format&fit=crop&q=60&format=webp', // Lightweight WebP image
    },
    {
      title: 'Applications of Civil Engineering',
      content:
        'Civil Engineering is applied in various fields, including structural engineering, geotechnical engineering, transportation engineering, and environmental engineering. It plays a critical role in urban planning, water resource management, and disaster-resistant construction. Civil engineers also work on large-scale projects like highways, tunnels, and skyscrapers.',
      image: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=500&auto=format&fit=crop&q=60&format=webp', // Lightweight WebP image
    },
    {
      title: 'Career Opportunities in Civil Engineering',
      content:
        'Civil Engineering offers diverse career opportunities, including roles like Structural Engineer, Geotechnical Engineer, Construction Manager, and Urban Planner. Professionals can work in government agencies, construction firms, consulting companies, or research institutions. The demand for civil engineers is growing due to urbanization and infrastructure development.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&auto=format&fit=crop&q=60&format=webp', // Lightweight WebP image
    },
    {
      title: 'Future Trends in Civil Engineering',
      content:
        'The future of Civil Engineering is shaped by advancements in smart materials, sustainable construction, and digital technologies like Building Information Modeling (BIM) and 3D printing. Green building practices, resilient infrastructure, and the use of AI for project management are also key trends. Civil engineers are increasingly focusing on climate change adaptation and mitigation.',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&auto=format&fit=crop&q=60&format=webp', // Lightweight WebP image
    },
    {
      title: 'Skills Required for Civil Engineers',
      content:
        'Civil engineers need strong analytical, problem-solving, and project management skills. Proficiency in CAD software, knowledge of construction codes, and an understanding of materials science are essential. Communication and teamwork skills are also crucial for collaborating with architects, contractors, and stakeholders.',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&auto=format&fit=crop&q=60&format=webp', // Lightweight WebP image
    },
    {
      title: 'Impact of Civil Engineering on Society',
      content:
        'Civil Engineering has a profound impact on society by providing essential infrastructure that supports economic growth and improves quality of life. From clean water systems to transportation networks, civil engineers play a vital role in shaping modern civilization. They also address global challenges like climate change and population growth.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&auto=format&fit=crop&q=60&format=webp', // Lightweight WebP image
    },
  ];

  return (
    <>
    <div className="civil-container">
      <h1 className="civil-title">Civil Engineering: Building the Future</h1>
      <div className="civil-grid">
        {civilData.map((item, index) => (
          <div key={index} className="civil-card">
            <img
              src={item.image}
              alt={item.title}
              className="civil-image"
              loading="lazy" // Lazy loading for better performance
            />
            <div className="civil-content">
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

export default Civil;