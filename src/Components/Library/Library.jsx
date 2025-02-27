import React from 'react';
import './Library.css';
import library1 from '../../assets/Library1.webp'
import library2 from '../../assets/Library2.webp'
import library3 from '../../assets/Library3.webp'
import library4 from '../../assets/Library4.webp'

const Library = () => {
  return (
    <div className="library-container">
      <div className="library-section">
        <h2>VISION</h2>
        <p>
          Our vision for the Central Library is to provide excellent resources and innovative services to encourage creativity, intellectual curiosity, and to facilitate lifelong learning and research within the students and faculty.
        </p>
      </div>

      <div className="library-section">
        <h2>MISSION</h2>
        <p>
          To support the academic and research needs of the students and staff of SPC, and improve the quality of technical education by bringing it at par with national and international standards.
        </p>
        <p>
          To realize this mission, the Library provides access to the reading and research material in print and digital formats and more.
        </p>
      </div>

      <div className="library-section">
        <h2>OBJECTIVES</h2>
        <ul>
          <li>Communicate library services to raise awareness and promote utilization of library resources effectively.</li>
          <li>To Provide multifaceted supportive learning and teaching environment to the students and faculty.</li>
          <li>Right information to the right reader at a right time in right format.</li>
          <li>Provide accessibility to information in a well organized and coherent manner.</li>
          <li>Develop an efficient and effective college library which is adaptable to the changing academic environment.</li>
          <li>To provide global access to information published worldwide in many disciplines in support of qualitative research and education.</li>
        </ul>
      </div>

      <div className="library-section">
        <h2>ABOUT LIBRARY</h2>
        <p>
          The central library is to support the curriculum needs of students, teaching staff and support staff of the institution through the development of pertinent collections. The central library at SPC serves as a vital resource for academic and research activities.
        </p>
      </div>

      <div className="library-section">
        <h2>Library Photos</h2>
        <div className="library-photos">
          {/* Add your image components or placeholders here */}
          <div className="photo-placeholder"><img src={library1} alt="" /></div>
          <div className="photo-placeholder"><img src={library2} alt="" /></div>
          <div className="photo-placeholder"><img src={library3} alt="" /></div>
          <div className="photo-placeholder"><img src={library4} alt="" /></div>
        </div>
      </div>

      <div className="library-section">
        <h2>Library Timings</h2>
        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p>Saturday: 10:00 AM - 4:00 PM</p>
        <p>Sunday: Closed</p>
      </div>

      <div className="library-section">
        <h2>Contact Us</h2>
        <p>Email: library@spc.edu</p>
        <p>Phone: +91 123 456 7890</p>
      </div>
    </div>
  );
};

export default Library;