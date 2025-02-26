import React, { useState } from 'react';
import './Aiml.css'; // Import CSS for styling

const Aiml = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const topics = [
    {
      title: 'Opportunities in AI/ML',
      content:
        'Artificial Intelligence and Machine Learning (AI/ML) are transforming industries by enabling automation, predictive analytics, and intelligent decision-making. Career opportunities in AI/ML include roles like Data Scientist, Machine Learning Engineer, AI Researcher, and AI Ethicist. Companies across healthcare, finance, retail, and technology are actively hiring professionals with expertise in AI/ML.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60', // Lightweight image
    },
    {
      title: 'Applications of AI/ML',
      content:
        'AI/ML is used in a wide range of applications, including Natural Language Processing (NLP) for chatbots, Computer Vision for facial recognition, Recommendation Systems for personalized content, Fraud Detection in finance, and Predictive Analytics for business forecasting. These technologies are also being used in autonomous vehicles, robotics, and smart home devices.',
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500&auto=format&fit=crop&q=60', // Lightweight image
    },
    {
      title: 'AI/ML in Healthcare',
      content:
        'AI/ML is revolutionizing healthcare by enabling early disease detection, personalized treatment plans, and drug discovery. Applications include medical imaging analysis (e.g., detecting tumors in X-rays), predicting patient outcomes, and automating administrative tasks. AI-powered tools like IBM Watson Health and Google DeepMind are leading the way in this field.',
      image: 'https://images.unsplash.com/photo-1578496781985-452d4a934d50?w=500&auto=format&fit=crop&q=60', // Lightweight image
    },
    {
      title: 'AI/ML in Finance',
      content:
        'In finance, AI/ML is used for algorithmic trading, credit scoring, fraud detection, and risk management. Banks and financial institutions leverage AI to analyze large datasets, detect anomalies, and make data-driven decisions. Tools like robo-advisors and AI-powered chatbots are also becoming increasingly popular.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&auto=format&fit=crop&q=60', // Lightweight image
    },
    {
      title: 'AI/ML in Autonomous Vehicles',
      content:
        'AI/ML powers self-driving cars by enabling real-time object detection, path planning, and decision-making. Companies like Tesla, Waymo, and Uber are using AI to develop autonomous vehicles that can navigate complex environments safely. These technologies rely on deep learning models and sensor fusion to interpret data from cameras, LiDAR, and radar.',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=500&auto=format&fit=crop&q=60', // Lightweight image
    },
    {
      title: 'AI/ML Careers',
      content:
        'AI/ML offers a wide range of career opportunities, including Data Scientist, Machine Learning Engineer, AI Researcher, and AI Product Manager. These roles require expertise in programming (Python, R), statistics, and domain knowledge. Certifications and advanced degrees in AI/ML can help professionals stand out in this competitive field.',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&auto=format&fit=crop&q=60', // Lightweight image
    },
    {
      title: 'AI/ML in Education',
      content:
        'AI/ML is transforming education by enabling personalized learning experiences, automating administrative tasks, and providing intelligent tutoring systems. Tools like Duolingo and Khan Academy use AI to adapt content to individual learners. AI is also being used to analyze student performance and predict outcomes.',
      image: 'https://images.unsplash.com/photo-1584697964358-3e14ca57658b?w=500&auto=format&fit=crop&q=60', // Lightweight image
    },
    {
      title: 'AI/ML in Retail',
      content:
        'In retail, AI/ML is used for demand forecasting, inventory management, and personalized marketing. E-commerce platforms like Amazon use AI to recommend products, optimize pricing, and improve customer experiences. AI-powered chatbots and virtual assistants are also enhancing customer support.',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60', // Lightweight image
    },
  ];

  return (
    <div className="aiml-container">
      <h1 className="aiml-title">AI/ML: Opportunities, Applications, and Careers</h1>
      <div className="accordion">
        {topics.map((topic, index) => (
          <div key={index} className="accordion-item">
            <div
              className="accordion-title"
              onClick={() => toggleAccordion(index)}
            >
              <h3>{topic.title}</h3>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="accordion-content">
                <img src={topic.image} alt={topic.title} className="accordion-image" />
                <p>{topic.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aiml;