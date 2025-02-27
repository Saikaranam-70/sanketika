import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo copy.webp';
import logo2 from '../../assets/logo2.webp';
import './Navbar.css';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Dropdown = ({ title, items, isOpen, toggle }) => {
  return (
    <div className="nav-link dropdown" onClick={(e) => e.stopPropagation()}>
      <span onClick={toggle}>{title}↓</span>
      {isOpen && (
        <div className="dropdown-content">
          {items.map((item, index) => (
            <RouterLink key={index} to={item.link}>
              {item.name}
            </RouterLink>
          ))}
        </div>
      )}
    </div>
  );
};


const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [departmentsOpen, setDepartmentsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [acadamicsOpen, setAcadamicsOpen] = useState(false);
  const [fecilitiesOpen, setFecilitiesOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleDepartments = () => {
    setDepartmentsOpen(!departmentsOpen);
  };

  const toggleAcadamics = () => {
    setAcadamicsOpen(!acadamicsOpen);
  };

  const toggleFecilities = () => {
    setFecilitiesOpen(!fecilitiesOpen);
  };

  const toggleAbout = () => {
    setAboutOpen(!aboutOpen);
  };

  const toggleLogin = () => {
    setLoginOpen(!loginOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fecilities = [
    { name: "Transportation", link: "/transportation" },
    { name: "Sports", link: "/sports" },
    { name: "Library", link: "/library" },
  ];


  const departments = [
    { name: "Civil Engineering", link: "/civil" },
    { name: "Electrical Engineering", link: "/eee" },
    { name: "Mechanical Engineering", link: "/mech" },
    { name: "Electronics & Communication", link: "/ece" },
    { name: "Computer Engineering", link: "/cme" },
    { name: "Automobile Engineering", link: "/automobile" },
    { name: "Artificial Intelligence & ML", link: "/aiml" },
  ];

  const acadamics = [
    { name: "Courses", link: "/courses" },
    {name: "Notifications", link:"/notifications"},
    {name:"Attendence", link:"/attendence"},
    {name:"Events", link:"/events"}
  ]
  const about = [
    { name: "About Us", link: "/about-us" },
    { name: "Overview", link: "/overview" },
  ];

  const loginOptions = [
    { name: "Principal Login", link: "/principal" },
    { name: "Student Login", link: "/student" },
    { name: "Hod Login", link: "/hod" },
  ];

  return (
    <div className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo_section">
        <RouterLink to="/">
        <img
  src={logo}
  alt="College Logo"
  width={80} // Explicit width
  height={80} // Explicit height
  loading="lazy" // Lazy load non-critical images
/>
        </RouterLink>
      </div>

      <div className="nav-middle">
        <div className="clg_detail_section">
          <h3>Sanketika Polytechnic College</h3>
          <p className="nav_description">Where Knowledge Meets Excellence</p>
          <p className="nav_description">
            (Approved By AICTC New Delhi & Affiliated To SBTET Govt. Of AP)
          </p>
        </div>

        <div className="nav_menu" data-aos="fade-down">
          <div className="nav_link">
            <RouterLink to="/">Home</RouterLink>
          </div>

          {/* Acadamics Dropdown */}
          <Dropdown
            title="Acadamics"
            items={acadamics}
            isOpen={acadamicsOpen}
            toggle={toggleAcadamics}
          />

          {/* Departments Dropdown */}
          <Dropdown
            title="Departments"
            items={departments}
            isOpen={departmentsOpen}
            toggle={toggleDepartments}
          />

          {/* About Dropdown */}
          <Dropdown
            title="About"
            items={about}
            isOpen={aboutOpen}
            toggle={toggleAbout}
          />

          <div className="nav_link">
            <RouterLink to="/admission">Admissions</RouterLink>
          </div>

          {/* Facilities Dropdown */}
          <Dropdown
            title="Facilities"
            items={fecilities}
            isOpen={fecilitiesOpen}
            toggle={toggleFecilities}
          />

          <div className="nav_link">
            <RouterLink to="/gallery">Gallery</RouterLink>
          </div>

          <div className="nav_link">
            <RouterLink to="/placements">Placements</RouterLink>
          </div>

          {/* Login Dropdown */}
          <Dropdown
            title="Login"
            items={loginOptions}
            isOpen={loginOpen}
            toggle={toggleLogin}
          />
        </div>
      </div>

      <div className="logo2_section">
        <RouterLink to="/">
        <img
  src={logo2}
  alt="College Logo 2"
  width={150} // Explicit width
  height={150} // Explicit height
  loading="lazy" // Lazy load non-critical images
/>
        </RouterLink>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      {/* Mobile Menu */}
      <div className={`nav_menu_mobile ${menuOpen ? 'show' : ''}`}>
        <div className="nav_link">
          <RouterLink to="/">Home</RouterLink>
        </div>

        {/* Acadamics Dropdown for Mobile */}
        <Dropdown
          title="Acadamics"
          items={acadamics}
          isOpen={acadamicsOpen}
          toggle={toggleAcadamics}
        />

        {/* Departments Dropdown for Mobile */}
        <Dropdown
          title="Departments"
          items={departments}
          isOpen={departmentsOpen}
          toggle={toggleDepartments}
        />

        {/* About Dropdown for Mobile */}
        <Dropdown
          title="About"
          items={about}
          isOpen={aboutOpen}
          toggle={toggleAbout}
        />

        <div className="nav_link">
          <RouterLink to="/admission">Admissions</RouterLink>
        </div>

        {/* Facilities Dropdown for Mobile */}
        <Dropdown
          title="Facilities"
          items={fecilities}
          isOpen={fecilitiesOpen}
          toggle={toggleFecilities}
        />

        <div className="nav_link">
          <RouterLink to="/gallery">Gallery</RouterLink>
        </div>

        <div className="nav_link">
          <RouterLink to="/placements">Placements</RouterLink>
        </div>

        {/* Login Dropdown for Mobile */}
        <Dropdown
          title="Login"
          items={loginOptions}
          isOpen={loginOpen}
          toggle={toggleLogin}
        />
      </div>
    </div>
  );
};

export default Navbar;