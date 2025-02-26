import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo copy.png';
import logo2 from '../../assets/logo2.png';
import './Navbar.css';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [departmentsOpen, setDepartmentsOpen] = useState(false); // State for dropdown
  const [aboutOpen, setAboutOpen] = useState(false)
  const [acadamicsOpen, setAcadamicsOpen] = useState(false)
  const [fecilitiesOpen, setFecilitiesOpen] = useState(false)
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(()=>{
    setMenuOpen(false)
  }, [location])
  const toggleDepartments = () => {
    setDepartmentsOpen(!departmentsOpen);
  };

  const toggleAcadamics = () =>{
    setAcadamicsOpen(!acadamicsOpen)
  }
  const toggleFecilities =()=>{
    setFecilitiesOpen(!fecilitiesOpen)
  }

  const toggleAbout=()=>{
    setAboutOpen(!aboutOpen)
  }

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

  const isHodLoginPage = location.pathname === '/hod';
  const isPrincipalLoginPage = location.pathname === '/student';
  const isStudentLoginPage = location.pathname === '/principal';

  // List of departments
  
  const fecilities = [
    {name:"Transportation", link:"/transportation"},
    {name:"Sports", link: "/sports"},
    {name:"library", link:"/library"}
  ]

  const departments = [
    { name: "Civil Engineering", link: "/civil" },
    { name: "Electrical Engineering", link: "/eee" },
    { name: "Mechanical Engineering", link: "/mech" },
    { name: "Electronics & Communication", link: "/ece" },
    { name: "Computer Engineering", link: "/cme" },
    { name: "Automobile Engineering", link: "/automobile" },
    { name: "Artificial Intelligence & ML", link: "/aiml" },
  ];

  const about = [
    {name: 'About Us', link: "/about-us"},
    {name: 'Overview', link:"/overview"}
  ]

  return (
    <div className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo_section">
        <RouterLink to='/'>
        <img src={logo} alt="College Logo" />
        </RouterLink>
        
      </div>

      <div className="nav-middle">
        <div className="clg_detail_section">
          <h3>Sanketika Polytechnic College</h3>
          <p className="nav_description">Where Knowledge Meets Excellence</p>
          <p className="nav_description">(Approved By AICTC New Delhi & Affiliated To SBTET Govt. Of AP)</p>
        </div>

        <div className="nav_menu" data-aos="fade-down">
          <div className="nav_link">
            <RouterLink to="/" smooth={true} offset={0} duration={500}>
              Home
            </RouterLink>
          </div>

          {/* Departments Dropdown */}
          <div className="nav-link dropdown" onClick={toggleAcadamics}>
            <span>Acadamics↓</span>
            <div className="dropdown-content">
              <RouterLink to='/courses'>Courses</RouterLink>
              <div className="nav_link dropdown" onClick={toggleDepartments}>
            <span>Departments↓</span>
            {departmentsOpen && (
              <div className="dropdown-content">
                {departments.map((dept, index) => (
                  <RouterLink key={index} to={dept.link}>
                    {dept.name}
                  </RouterLink>
                ))}
              </div>
            )}
          </div>
            </div>
          </div>
         

          <div className="nav_link dropdown" onClick={toggleAbout}>
            <span>About↓</span>
            {aboutOpen && (
              <div className="dropdown-content">
                {about.map((ab, index)=>(
                  <RouterLink key={index} to={ab.link}>
                    {ab.name}
                  </RouterLink>
                ))}
              </div>
            )}
          </div>

          

          <div className="nav_link">
          <RouterLink to='/admission'>
              Admissions
              </RouterLink>
          </div>

          <div className="nav_link dropdown" onClick={toggleFecilities}>
            <span>Fecilities↓</span>
            {fecilitiesOpen && (
              <div className="dropdown-content">
                {fecilities.map((ab, index)=>(
                  <RouterLink key={index} to={ab.link}>
                    {ab.name}
                  </RouterLink>
                ))}
              </div>
            )}
          </div>

          <div className="nav_link">
          <RouterLink to='/gallery'>
              Gallery
              </RouterLink>
          </div>
          <div className="nav_link">
          <RouterLink to='/placements'>
              Placements
              </RouterLink>
          </div>


          <div className="nav_link">
            <RouterLink to="/principal">Principal Login</RouterLink>
          </div>

          <div className="nav_link">
            <RouterLink to="/student">Student Login</RouterLink>
          </div>

          <div className="nav_link">
            <RouterLink to="/hod">Hod Login</RouterLink>
          </div>
        </div>
      </div>

      <div className="logo2_section">
      <RouterLink to='/'>
        <img src={logo2} alt="College Logo 2" />
        </RouterLink>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      {/* Mobile Menu */}
      <div className={`nav_menu_mobile ${menuOpen ? 'show' : ''}`}>
        <div className="nav_link">
          <RouterLink to="/" smooth={true} offset={0} duration={500}>
            Home
          </RouterLink>
        </div>

        {/* Departments Dropdown for Mobile */}
        <div className="nav-link dropdown" onClick={toggleAcadamics}>
            <span>Acadamics↓</span>
            <div className="dropdown-content">
              <RouterLink to='/courses'>Courses</RouterLink>
              <div className="nav_link dropdown" onClick={toggleDepartments}>
            <span>Departments↓</span>
            {departmentsOpen && (
              <div className="dropdown-content">
                {departments.map((dept, index) => (
                  <RouterLink key={index} to={dept.link}>
                    {dept.name}
                  </RouterLink>
                ))}
              </div>
            )}
          </div>
            </div>
          </div>

        <div className="nav_link dropdown" onClick={toggleAbout}>
          <span>About↓</span>
          {aboutOpen && (
            <div className="dropdown-content">
              {about.map((ab, index)=>(
                <RouterLink key={index} to={ab.link}>
                {ab.name}
              </RouterLink>
              ))}
            </div>
          )}
        </div>
        <div className="nav_link">
          <RouterLink to='/admission'>
              Admissions
              </RouterLink>
          </div>

          <div className="nav_link dropdown" onClick={toggleFecilities}>
            <span>Fecilities↓</span>
            {fecilitiesOpen && (
              <div className="dropdown-content">
                {fecilities.map((ab, index)=>(
                  <RouterLink key={index} to={ab.link}>
                    {ab.name}
                  </RouterLink>
                ))}
              </div>
            )}
          </div>

        <div className="nav_link">
          <ScrollLink to="contact" smooth={true} offset={-260} duration={500}>
            Contact us
          </ScrollLink>
        </div>
        <div className="nav_link">
          <RouterLink to='/gallery'>
              Gallery
              </RouterLink>
          </div>

        <div className="nav_link">
          <RouterLink to='/placements'>
              Placements
              </RouterLink>
          </div>

        <div className="nav_link">
          <RouterLink to="/principal">Principal Login</RouterLink>
        </div>

        <div className="nav_link">
          <RouterLink to="/student">Student Login</RouterLink>
        </div>

        <div className="nav_link">
          <RouterLink to="/hod">Hod Login</RouterLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;