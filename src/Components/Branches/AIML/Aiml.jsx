// import React, { useState } from 'react';
// import './Aiml.css'; // Import CSS for styling
// import ai1 from '../../../assets/ai1.webp'
// import ai2 from '../../../assets/ai2.webp'
// import ai3 from '../../../assets/ai3.webp'
// import ai4 from '../../../assets/ai4.webp'
// import ai5 from '../../../assets/ai5.webp'
// import ai6 from '../../../assets/ai6.webp'
// import ai7 from '../../../assets/ai7.webp'
// import ai8 from '../../../assets/ai8.webp'

// const Aiml = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   const topics = [
//     {
//       title: 'Opportunities in AI/ML',
//       content:
//         'Artificial Intelligence and Machine Learning (AI/ML) are transforming industries by enabling automation, predictive analytics, and intelligent decision-making. Career opportunities in AI/ML include roles like Data Scientist, Machine Learning Engineer, AI Researcher, and AI Ethicist. Companies across healthcare, finance, retail, and technology are actively hiring professionals with expertise in AI/ML.',
//       image: ai1, // Lightweight image
//     },
//     {
//       title: 'Applications of AI/ML',
//       content:
//         'AI/ML is used in a wide range of applications, including Natural Language Processing (NLP) for chatbots, Computer Vision for facial recognition, Recommendation Systems for personalized content, Fraud Detection in finance, and Predictive Analytics for business forecasting. These technologies are also being used in autonomous vehicles, robotics, and smart home devices.',
//       image: ai2, // Lightweight image
//     },
//     {
//       title: 'AI/ML in Healthcare',
//       content:
//         'AI/ML is revolutionizing healthcare by enabling early disease detection, personalized treatment plans, and drug discovery. Applications include medical imaging analysis (e.g., detecting tumors in X-rays), predicting patient outcomes, and automating administrative tasks. AI-powered tools like IBM Watson Health and Google DeepMind are leading the way in this field.',
//       image: ai3, // Lightweight image
//     },
//     {
//       title: 'AI/ML in Finance',
//       content:
//         'In finance, AI/ML is used for algorithmic trading, credit scoring, fraud detection, and risk management. Banks and financial institutions leverage AI to analyze large datasets, detect anomalies, and make data-driven decisions. Tools like robo-advisors and AI-powered chatbots are also becoming increasingly popular.',
//       image: ai4, // Lightweight image
//     },
//     {
//       title: 'AI/ML in Autonomous Vehicles',
//       content:
//         'AI/ML powers self-driving cars by enabling real-time object detection, path planning, and decision-making. Companies like Tesla, Waymo, and Uber are using AI to develop autonomous vehicles that can navigate complex environments safely. These technologies rely on deep learning models and sensor fusion to interpret data from cameras, LiDAR, and radar.',
//       image: ai5, // Lightweight image
//     },
//     {
//       title: 'AI/ML Careers',
//       content:
//         'AI/ML offers a wide range of career opportunities, including Data Scientist, Machine Learning Engineer, AI Researcher, and AI Product Manager. These roles require expertise in programming (Python, R), statistics, and domain knowledge. Certifications and advanced degrees in AI/ML can help professionals stand out in this competitive field.',
//       image: ai6, // Lightweight image
//     },
//     {
//       title: 'AI/ML in Education',
//       content:
//         'AI/ML is transforming education by enabling personalized learning experiences, automating administrative tasks, and providing intelligent tutoring systems. Tools like Duolingo and Khan Academy use AI to adapt content to individual learners. AI is also being used to analyze student performance and predict outcomes.',
//       image: ai7, // Lightweight image
//     },
//     {
//       title: 'AI/ML in Retail',
//       content:
//         'In retail, AI/ML is used for demand forecasting, inventory management, and personalized marketing. E-commerce platforms like Amazon use AI to recommend products, optimize pricing, and improve customer experiences. AI-powered chatbots and virtual assistants are also enhancing customer support.',
//       image: ai8, // Lightweight image
//     },
//   ];

//   return (
//     <div className="aiml-container">
//       <h1 className="aiml-title">AI/ML: Opportunities, Applications, and Careers</h1>
//       <div className="accordion">
//         {topics.map((topic, index) => (
//           <div key={index} className="accordion-item">
//             <div
//               className="accordion-title"
//               onClick={() => toggleAccordion(index)}
//             >
//               <h3>{topic.title}</h3>
//               <span>{activeIndex === index ? '-' : '+'}</span>
//             </div>
//             {activeIndex === index && (
//               <div className="accordion-content">
//                 <img src={topic.image} alt={topic.title} className="accordion-image" />
//                 <p>{topic.content}</p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Aiml;

import React, { useState, useEffect } from 'react';
import './Aiml.css'; // Import CSS for styling
import ai1 from '../../../assets/ai1.webp'
import ai2 from '../../../assets/ai2.webp'
import ai3 from '../../../assets/ai3.webp'
import ai4 from '../../../assets/ai4.webp'
import ai5 from '../../../assets/ai5.webp'
import ai6 from '../../../assets/ai6.webp'
import ai7 from '../../../assets/ai7.webp'
import ai8 from '../../../assets/ai8.webp'
import Footer from '../../Footer/Footer';

const Aiml = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const topics = [
    { title: 'Opportunities in AI/ML', content: 'Artificial Intelligence and Machine Learning (AI/ML) are transforming industries by enabling automation, predictive analytics, and intelligent decision-making. Career opportunities in AI/ML include roles like Data Scientist, Machine Learning Engineer, AI Researcher, and AI Ethicist. Companies across healthcare, finance, retail, and technology are actively hiring professionals with expertise in AI/ML.', image: ai1 },
    { title: 'Applications of AI/ML', content: 'AI/ML is used in a wide range of applications, including Natural Language Processing (NLP) for chatbots, Computer Vision for facial recognition, Recommendation Systems for personalized content, Fraud Detection in finance, and Predictive Analytics for business forecasting. These technologies are also being used in autonomous vehicles, robotics, and smart home devices.', image: ai2 },
    { title: 'AI/ML in Healthcare', content: 'AI/ML is revolutionizing healthcare by enabling early disease detection, personalized treatment plans, and drug discovery. Applications include medical imaging analysis (e.g., detecting tumors in X-rays), predicting patient outcomes, and automating administrative tasks. AI-powered tools like IBM Watson Health and Google DeepMind are leading the way in this field.', image: ai3 },
    { title: 'AI/ML in Finance', content: 'In finance, AI/ML is used for algorithmic trading, credit scoring, fraud detection, and risk management. Banks and financial institutions leverage AI to analyze large datasets, detect anomalies, and make data-driven decisions. Tools like robo-advisors and AI-powered chatbots are also becoming increasingly popular.', image: ai4 },
    { title: 'AI/ML in Autonomous Vehicles', content: 'AI/ML powers self-driving cars by enabling real-time object detection, path planning, and decision-making. Companies like Tesla, Waymo, and Uber are using AI to develop autonomous vehicles that can navigate complex environments safely. These technologies rely on deep learning models and sensor fusion to interpret data from cameras, LiDAR, and radar.', image: ai5 },
    { title: 'AI/ML Careers', content: 'AI/ML offers a wide range of career opportunities, including Data Scientist, Machine Learning Engineer, AI Researcher, and AI Product Manager. These roles require expertise in programming (Python, R), statistics, and domain knowledge. Certifications and advanced degrees in AI/ML can help professionals stand out in this competitive field.', image: ai6 },
    { title: 'AI/ML in Education', content: 'AI/ML is transforming education by enabling personalized learning experiences, automating administrative tasks, and providing intelligent tutoring systems. Tools like Duolingo and Khan Academy use AI to adapt content to individual learners. AI is also being used to analyze student performance and predict outcomes.', image: ai7 },
    { title: 'AI/ML in Retail', content: 'In retail, AI/ML is used for demand forecasting, inventory management, and personalized marketing. E-commerce platforms like Amazon use AI to recommend products, optimize pricing, and improve customer experiences. AI-powered chatbots and virtual assistants are also enhancing customer support.', image: ai8 },
  ];

  return (
    <>
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
                <img
                  src={topic.image}
                  srcSet={`${topic.image}?w=300 300w, ${topic.image}?w=600 600w, ${topic.image}?w=1200 1200w`}
                  sizes="(max-width: 480px) 300px, (max-width: 768px) 600px, 1200px"
                  loading="lazy"
                  alt={topic.title}
                  className="accordion-image"
                />
                <p>{topic.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Aiml;
