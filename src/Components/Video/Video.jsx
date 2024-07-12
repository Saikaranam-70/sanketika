import React, { useRef, useState } from 'react'
import './Video.css'
import reel from '../../assets/reel.mp4'
const Video = ({video, setVideo}) => {

    const player = useRef(null);

    const closePlayer = (e) => {
        if(e.target === player.current){
            setVideo(false)
        }
    }
    
  return (
    <div onClick={closePlayer} ref={player} className={`video-player ${video ? '': 'hide'}`}>
      <video src={reel} autoPlay muted controls></video>
    </div>
  )
}

export default Video
