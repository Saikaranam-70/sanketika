import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Courses.css";
import civil from '../../../src/assets/civil.webp';
import eee from '../../assets/eee.webp';
import cme from '../../assets/cme.webp';
import ece from '../../assets/ece.webp';
import mech from '../../assets/mech.webp';
import Ai from '../../assets/Ai.webp';
import Ae from '../../assets/Ae.webp';
import Footer from "../Footer/Footer";

const courses = [
  { name: "Electrical Engineering", image: eee, link: "/eee", width: 400, height: 300 },
  { name: "Computer Engineering", image: cme, link: "/cme", width: 400, height: 300 },
  { name: "Electronics & Communication", image: ece, link: "/ece", width: 400, height: 300 },
  { name: "Mechanical Engineering", image: mech, link: "/mech", width: 400, height: 300 },
  { name: "Artificial Intelligence & ML", image: Ai, link: "/aiml", width: 400, height: 300 },
  { name: "Civil Engineering", image: civil, link: "/civil", width: 400, height: 300 },
  { name: "Automobile Engineering", image: Ae, link: "/automobile", width: 400, height: 300 },
];

const Courses = () => {
  return (
    <>
    <div className="courses-container">
      <h2 className="courses-title">Our Courses</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <Link key={index} to={course.link} className="course-card">
            <img
              src={course.image}
              alt={course.name}
              className="course-image"
              width={course.width} // Add explicit width
              height={course.height} // Add explicit height
              style={{ width: "100%", height: "auto" }} // Make images responsive
            />
            <h3 className="course-name">{course.name}</h3>
          </Link>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Courses;