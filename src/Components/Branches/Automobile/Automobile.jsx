import React from 'react';
import './Automobile.css'; // Import CSS for styling

const Automobile = () => {
  const automobileData = [
    {
      title: 'What is Automobile Engineering?',
      content:
        'Automobile Engineering is a branch of engineering that deals with the design, manufacturing, and maintenance of automobiles. It involves the application of mechanical, electrical, electronic, and software engineering principles to develop vehicles that are efficient, safe, and environmentally friendly.',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&auto=format&fit=crop&q=60&format=webp', // Lightweight WebP image
    },
    {
      title: 'Applications of Automobile Engineering',
      content:
        'Automobile Engineering is used in the design and production of cars, trucks, motorcycles, and other vehicles. It also plays a crucial role in developing advanced technologies like electric vehicles (EVs), autonomous driving systems, and hybrid engines. Applications include vehicle dynamics, aerodynamics, and fuel efficiency optimization.',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop&q=60&format=webp', // Lightweight WebP image
    },
    {
      title: 'Career Opportunities in Automobile Engineering',
      content:
        'Automobile Engineering offers a wide range of career opportunities, including roles like Automotive Design Engineer, Production Engineer, Quality Control Engineer, and Research and Development (R&D) Engineer. Professionals in this field can work with automotive giants like Tesla, Toyota, BMW, and Ford, or in research institutions and government organizations.',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&auto=format&fit=crop&q=60&format=webp', // Lightweight WebP image
    },
    {
      title: 'Future Trends in Automobile Engineering',
      content:
        'The future of Automobile Engineering is driven by innovations like electric vehicles (EVs), autonomous driving, and connected cars. The industry is also focusing on sustainability, with advancements in hydrogen fuel cells, lightweight materials, and renewable energy integration. AI and IoT are playing a key role in shaping the future of smart vehicles.',
      image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500&auto=format&fit=crop&q=60&format=webp', // Lightweight WebP image
    },
    {
      title: 'Skills Required for Automobile Engineers',
      content:
        'To excel in Automobile Engineering, professionals need a strong foundation in mechanical and electrical engineering, as well as skills in CAD software, programming, and data analysis. Problem-solving, creativity, and a passion for innovation are also essential traits for success in this field.',
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&auto=format&fit=crop&q=60&format=webp', // Lightweight WebP image
    },
    {
      title: 'Impact of Automobile Engineering on Society',
      content:
        'Automobile Engineering has transformed the way we travel and commute, making transportation faster, safer, and more accessible. It has also contributed to economic growth by creating jobs and driving innovation. However, the industry faces challenges like reducing carbon emissions and developing sustainable transportation solutions.',
      image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500&auto=format&fit=crop&q=60&format=webp', // Lightweight WebP image
    },
  ];

  return (
    <div className="automobile-container">
      <h1 className="automobile-title">Automobile Engineering: Innovations and Opportunities</h1>
      <div className="automobile-grid">
        {automobileData.map((item, index) => (
          <div key={index} className="automobile-card">
            <img
              src={item.image}
              alt={item.title}
              className="automobile-image"
              loading="lazy" // Lazy loading for better performance
            />
            <div className="automobile-content">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Automobile;