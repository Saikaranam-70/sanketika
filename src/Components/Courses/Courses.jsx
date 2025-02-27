import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Courses.css";
import civil from '../../../src/assets/civil.webp';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from "react";
import eee from '../../assets/eee.webp'
import cme from '../../assets/cme.webp'
import ece from '../../assets/ece.webp'
import mech from '../../assets/mech.webp'
import Ai from '../../assets/Ai.webp'
import Ae from '../../assets/Ae.webp'
const courses = [
  { name: "Electrical Engineering", image: eee, link: "/eee" },
  { name: "Computer Engineering", image: cme, link: "/cme" },
  { name: "Electronics & Communication", image: ece, link: "/ece" },
  { name: "Mechanical Engineering", image: mech, link: "/mech" },
  { name: "Artificial Intelligence & ML", image: Ai, link: "/aiml" },
  { name: "Civil Engineering", image: civil, link: "/civil" },
  { name: "Automobile Engineering", image: Ae, link: "/automobile" },
];

const Courses = () => {
  

  return (
    <div className="courses-container" >
      <h2 className="courses-title">Our Courses</h2>
      <div className="courses-grid" >
        {courses.map((course, index) => (
          <Link key={index} to={course.link} className="course-card" >
            <img src={course.image} alt={course.name} className="course-image" />
            <h3 className="course-name">{course.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses;