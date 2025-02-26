


import React, { useEffect } from 'react';
import './About.css';
import clg from '../../assets/clg7.jpeg';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { Link } from 'react-router-dom';

const About = () => {
    useEffect(() => {
        Aos.init({
          duration: 500,
          easing: 'ease-in-out', 
          once: false, 
        });
      }, []);

  return (
    <div className='about'>
      <div className="about-description" data-aos="fade-right">
        <p className="about-us">About Us</p>
        <div className="about-description1" data-aos="fade-up">
          <h1 className="about-welcome">Welcome to</h1>
          <h2 className="about-clg-name">Sanketika</h2>
        </div>
        <div className="about-description2" data-aos="fade-left">
          <p className="description-para">
            Sanketika Polytechnic College, with over 15 years of academic excellence, is renowned for its commitment to quality education in engineering and technology. Established in 2009, the college offers a vibrant campus life, fostering innovation and holistic development among its students.
          </p>
        </div>
        <Link to='/about-more'>
        <button className="about-more" data-aos="zoom-in">
          Read More
        </button>
        </Link>
      </div>
      <div className="about-image" data-aos="fade-right">
        <img src={clg} alt="College" className="about-img" />
      </div>
    </div>
  );
}

export default About;
