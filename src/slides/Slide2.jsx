import './Slide2.css';
import React, { useState, useEffect } from 'react';


const Slide2 = ({ slideNumber }) => {
  // Dynamically import images and video based on slide number
  const media = {
    image1: require(`../assets/slide${slideNumber}/egocentric.png`),
    image2: require(`../assets/slide${slideNumber}/thirdpersonview.png`),
    image3: require(`../assets/slide${slideNumber}/fish2mesh.png`),
    gif: require(`../assets/slide${slideNumber}/video.gif`), // Ensure video is in the correct format and path

    normalGif: require(`../assets/slide${slideNumber}/video.gif`),
    responsiveGif: require(`../assets/slide${slideNumber}/video-responsive.gif`),
  };

  const [currentGif, setCurrentGif] = useState(media.normalGif);

  useEffect(() => {
    const updateGif = () => {
      if (window.innerWidth <= 1420) {
        setCurrentGif(media.responsiveGif);
      } else {
        setCurrentGif(media.normalGif);
      }
    };

    // Set initial GIF based on screen width
    updateGif();

    // Listen for resize events
    window.addEventListener('resize', updateGif);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateGif);
    };
  }, [media.normalGif, media.responsiveGif]);

  return (
    <div className="slide2-container">
      <div className="media-row">
        <div className="media-box">
          <img src={media.image1} alt="Image 1" className="slide2-image" />
          <p className="caption">Egocentric Input</p>
        </div>
        <div className="media-box">
          <img src={media.image2} alt="Image 2" className="slide2-image" />
          <p className="caption">3rd Person View</p>
        </div>
        <div className="media-box">
          <img src={media.image3} alt="Image 3" className="slide2-image" />
          <p className="caption">Fish2Mesh Output</p>
        </div>
        <div className="media-box">
          <img src={currentGif} alt="3D Mesh" className="slide2-image" />
          <p className="caption">3D Mesh</p>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
