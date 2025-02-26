import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Courses.css";
import civil from '../../../src/assets/civil.jpg';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from "react";

const courses = [
  { name: "Electrical Engineering", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", link: "/eee" },
  { name: "Computer Engineering", image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d", link: "/cme" },
  { name: "Electronics & Communication", image: "https://images.unsplash.com/photo-1518770660439-4636190af475", link: "/ece" },
  { name: "Mechanical Engineering", image: "https://images.unsplash.com/photo-1519638399535-1b036603ac77", link: "/mech" },
  { name: "Artificial Intelligence & ML", image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb", link: "/aiml" },
  { name: "Civil Engineering", image: civil, link: "/civil" },
  { name: "Automobile Engineering", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf", link: "/automobile" },
];

const Courses = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <div className="courses-container" data-aos="fade-right">
      <h2 className="courses-title">Our Courses</h2>
      <div className="courses-grid" data-aos="fade-left">
        {courses.map((course, index) => (
          <Link key={index} to={course.link} className="course-card" data-aos="fade-up">
            <img src={course.image} alt={course.name} className="course-image" />
            <h3 className="course-name">{course.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses;