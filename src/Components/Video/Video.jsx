// import React, { useRef, useState } from 'react'
// import './Video.css'
// import reel from '../../assets/reel.mp4'
// const Video = ({video, setVideo}) => {

//     const player = useRef(null);

//     const closePlayer = (e) => {
//         if(e.target === player.current){
//             setVideo(false)
//         }
//     }
    
//   return (
//     <div onClick={closePlayer} ref={player} className={`video-player ${video ? '': 'hide'}`}>
//       <video src={reel} autoPlay muted controls></video>
//     </div>
//   )
// }

// export default Video


import React, { useRef, useState, useEffect } from 'react';
import './Video.css';
import reel from '../../assets/reel.mp4';

const Video = ({ video, setVideo }) => {
  const player = useRef(null);

  // Close the video player when clicking outside the video
  const closePlayer = (e) => {
    if (e.target === player.current && typeof setVideo === 'function') {
      setVideo(false);
    }
  };

  // Pause the video when the component unmounts
  useEffect(() => {
    const videoElement = player.current?.querySelector('video');
    return () => {
      if (videoElement) {
        videoElement.pause(); // Pause the video when the component unmounts
      }
    };
  }, []);

  return (
    <div
      onClick={closePlayer}
      ref={player}
      className={`video-player ${video ? '' : 'hide'}`}
      role="button"
      aria-label="Close video player"
    >
      <video src={reel} autoPlay muted controls></video>
    </div>
  );
};

export default Video;