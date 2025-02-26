import React, { useState } from 'react';
import './AboutUs.css';
import secretaryImage from '../../assets/secretary.png'; // Adjust the path as needed
import executiveDirectorImage from '../../assets/executive-director.png';
import placementOfficerImage from '../../assets/placement-officer.png';
import coordinatorImage from '../../assets/coordinator.png';
import hrManagerImage from '../../assets/hr-manager.png';
import principalImage from '../../assets/principlal.png';
import executiveOfficer from '../../assets/executive-officer.png';

const AboutUs = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleExpand = (index) => {
    if (expandedCard === index) {
      setExpandedCard(null); // Collapse the card if it's already expanded
    } else {
      setExpandedCard(index); // Expand the clicked card
    }
  };

  const cardData = [
    {
      image: secretaryImage,
      title: "Secretary",
      name: "DR.S.V.H RAJENDRA",
      content: [
        "It is with great pride and enthusiasm that I welcome you to Sanketika Polytechnic College, a premier institution dedicated to nurturing talent, fostering innovation, and empowering students to become future-ready professionals.",
        "We are committed to providing an education that blends academic excellence with practical expertise preparing our students to thrive in a dynamic and competitive world.",
        "You are about to embark an incredible journey of learning, growth and discovery you will find endless opportunities to explore your potential and solve-real- world challenges and prepare for a rewarding career."
      ]
    },
    {
      image: executiveDirectorImage,
      title: "Executive Director",
      name: "Mr. Rahul Alwardas",
      content: [
        "With a history of excellence in technical education, we take pride in our alumni who have established themselves as leaders across various industries.",
        "We provide world class facilities including modern labs, workshops and classrooms that enable hands on learning and innovation.",
        "Through strong partnerships with leading companies we offer robust placement support ensuring our graduates embark on successful careers."
      ]
    },
    {
      image: executiveOfficer,
      title: "EXECUTIVE OFFICER",
      name: "Mrs. Madhu bhat",
      content: [
        "We are committed to shaping the future by empowering our students with the skills knowledge and confidence required to thrive in today’s competitive world. As premier technical educational institution, we provide an environment where innovation meets excellence and dreams turn into reality.",
        "To our aspiring students remember that the world is full of opportunities and skills you acquired here will serve as your ladder to success."
      ]
    },
    {
      image: coordinatorImage,
      title: "Administrative Officer & Coordinator",
      name: "A Nageswara Rao",
      content: [
        "Your role as a guiding force in your child’s life is valuable we understand the importance of your trust and strive to create an environment where your child’s potential can flourish through advanced programs, industry collaborations and hands – on learning, we ensure that every student is prepared for the challenges and opportunities of the modern workforce.",
        "Students journey with us will be one of growth, discovery and achievement. As you embark on this exciting path remember that every challenge your force is a stepping stone to success. We are here to support and guide you towards achieving your dreams."
      ]
    },
    {
      image: hrManagerImage,
      title: "H.R. Manager",
      name: "Akshata Kondur",
      content: [
        "We believe that technical education is not just about acquiring knowledge but about building skills that lead to meaningful and rewarding careers.",
        "As the H.R Manager, I am proud to share how out institution is shaping future professionals who are prepared to meet the demands of an ever – evolving global economy.",
        "You are the future, and this is your time to dreaming and work hard. Here you will find the opportunity to learn, innovate and excel. Remember success comes to those who are prepared."
      ]
    },
    {
      image: principalImage,
      title: "Principal",
      name: "Mr. A. Rama Krishna",
      content: [
        "It gives us great pleasure to welcome you to Sanketika Polytechnic College, a hub of innovation, technical excellence, and transformative education. Our institution is dedicated to equipping students with the skills, knowledge and values required to excel in their careers and contribute meaningfully to society.",
        "Your unwavering support is the cornerstone of our partnership. Together we aim to empower each student to reach their highest potential, academically socially and emotionally.",
        "Students remember that each day brings new opportunities to learn, grow and make a difference. Be curious, take responsibility for your learning and treat every challenge as a stepping stone towards success. Your dedication and resilience inspire us to create meaningful experience that prepare your for a bright future.",
        "Together we can make this journey a memorable and transformative."
      ]
    },
    {
      image: placementOfficerImage,
      title: "Training & Placement Officer",
      name: "K.T. Krishna Kumar",
      content: [
        "K.T. Krishna Kumar, with 14 years of experience, serves as the Training & Placement Officer at Sanketika Polytechnic College. He plays a key role in connecting academic learning with career success, guiding students through career development, skill-building, and job placement. His expertise includes coordinating campus placements, corporate relations, and fostering partnerships with industry leaders to create opportunities for students.",
        "Committed to student success, K.T. Krishna Kumar organizes workshops, internships, and recruitment drives that prepare students to navigate the competitive job market. His deep understanding of industry trends and passion for career advancement ensures that students at Sanketika Polytechnic College are well-equipped to excel in their professional endeavors."
      ]
    }
  ];

  return (
    <div className="cards-container">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`card ${expandedCard === index ? 'expanded' : ''}`}
        >
          <img src={card.image} alt={card.title} className="card-image" />
          <h2>{card.title}</h2>
          <h3>{card.name}</h3>
          {card.content.slice(0, expandedCard === index ? card.content.length : 1).map((paragraph, pIndex) => (
            <p key={pIndex}>{paragraph}</p>
          ))}
          {card.content.length > 1 && (
            <button onClick={() => toggleExpand(index)} className="read-more-button">
              {expandedCard === index ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default AboutUs;