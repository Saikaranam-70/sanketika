import React, { useEffect, useRef, useState } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'
import { API_URL } from '../../Principle/data/dataApi'

const Testimonials = () => {
  const [feed, setFeed] = useState([]);
  const [profile, setProfile] = useState(null);

  const handleFeed = async()=>{
    try {
      const responce = await fetch(`${API_URL}/feedback/all`)
      const data = await responce.json();
      setFeed(data.feedback)
      setProfile(data.feedback.studentImg)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    handleFeed();
  },[])

  const slider = useRef();
  let tx = 0;

  const slideForward = ()=>{
    if(tx > -400){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }
  const slideBackward = () => {
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }



  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          {feed.map((item)=>{
            return(
              <>
              <li>
              <div className="slide">
                <div className="user-info">
                  <img src={profile} alt="" />
                  <div>
                    <h3>{item.name}</h3>
                    <span>{item.branch}, {item.section}</span>
                  </div>
                </div>
                <p>
                  {item.feed}
                </p>
              </div>
            </li>
              </>
            )
          })}
            
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
