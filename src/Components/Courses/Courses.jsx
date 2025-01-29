import React from "react";
import "./Courses.css";
import civil from '../../../src/assets/civil.jpg'

const courses = [
    { name: "Electrical Engineering", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c" },
    { name: "Computer Engineering", image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d" },
    { name: "Electronics & Communication", image: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
    { name: "Mechanical Engineering", image: "https://images.unsplash.com/photo-1519638399535-1b036603ac77" },
    { name: "Artificial Intelligence & ML", image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb" },
    { name: "Civil Engineering", image: `${civil}` },
    { name: "Automobile Engineering", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf" },
  ];
const Courses = () => {
  return (
    <div className="courses-container">
      <h2 className="courses-title">Our Courses</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.image} alt={course.name} className="course-image" />
            <h3 className="course-name">{course.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
