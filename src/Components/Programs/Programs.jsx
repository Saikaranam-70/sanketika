import React from 'react'
import './Programs.css'
import program1 from '../../assets/program-1.webp'
import program2 from '../../assets/program-2.webp'
import program3 from '../../assets/program-3.webp'
import program_icon_1 from '../../assets/program-icon-1.webp'
import program_icon_2 from '../../assets/program-icon-2.webp'
import program_icon_3 from '../../assets/program-icon-3.webp'
import { Link } from 'react-router-dom'
import dark_arrow from '../../assets/dark-arrow.webp'
import { useEffect } from 'react'
import 'aos/dist/aos.css';
import Aos from 'aos';

const Programs = () => {
  useEffect(() => {
          Aos.init({
            duration: 500,
            easing: 'ease-in-out', 
            once: false, 
          });
        }, []);
  return (
    <>
    <div className='programs'>
      <div className="program" >
        <img src={program1} alt="" />
        <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>Computers</p>
        </div>
      </div>
      <div className="program" >
        <img src={program2} alt="" />
        <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Electronics</p>
        </div>
      </div>
      <div className="program" >
        <img src={program3} alt="" />
        <div className="caption">
            <img src={program_icon_3} alt="" />
            <p>Mechanical</p>
        </div>
        
      </div>
      
    </div>
    <div className="btn-div">
    <Link to='/courses'>
            
            <button className="btn">Explore more <img src={dark_arrow} alt="" /> </button>
            </Link>
            </div>
    
    </>
    
  )
}

export default Programs
