import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo copy.png'
import { Link as ScrollLink } from 'react-scroll';
import menu from '../../assets/menu-icon.png'
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setScroll(true) : setScroll(false);
    })
  },[])

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () =>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }


  return (
    <nav className={`container ${scroll ? 'dark-nav' :""}`}>
      <RouterLink to='/'><img src={logo} className='logo' alt="" /></RouterLink>
        
        <ul className={mobileMenu ? '' : 'hide'}>
          <li><ScrollLink to='hero' smooth={true} offset={0} duration={500}>Home</ScrollLink></li>
            <li><ScrollLink to='program' smooth={true} offset={-260} duration={500}>Program</ScrollLink></li>
            <li><ScrollLink to='about' smooth={true} offset={-150} duration={500}>About us</ScrollLink></li>
            <li><ScrollLink to='campus' smooth={true} offset={-260} duration={500}>Campus</ScrollLink></li>
            <li><ScrollLink to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</ScrollLink></li>
            <li><RouterLink to='/hod'>Hod Login</RouterLink></li>
            <li><RouterLink to='/student'>Student Login</RouterLink></li>
            <li><RouterLink to='/principal'>Principal Login</RouterLink></li>
           <li><ScrollLink className='btn' to='contact' smooth={true} offset={-260} duration={500}>Contact us</ScrollLink></li>
        </ul>
        <img src={menu} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
