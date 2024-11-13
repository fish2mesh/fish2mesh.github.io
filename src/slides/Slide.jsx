import React from 'react';
import './Slide.css';

const Slide = ({ slideNumber }) => {
  // Dynamically import images based on slide number
  const images = {
    egocentric: require(`../assets/slide${slideNumber}/egocentric.png`),
    thirdpersonview: require(`../assets/slide${slideNumber}/thirdpersonview.png`),
    gt: require(`../assets/slide${slideNumber}/gt.png`),
    fish2mesh: require(`../assets/slide${slideNumber}/fish2mesh.png`),
    fourdhuman: require(`../assets/slide${slideNumber}/4dhuman.png`),
    egohmr: require(`../assets/slide${slideNumber}/egohmr.png`),
    fishvit: require(`../assets/slide${slideNumber}/fishvit.png`),
  };

  return (
    <div className="slide-container">
      {/* First Row with 2 images */}
      <div className="image-row row-one">
        <div className="image-box">
          <img src={images.egocentric} alt="Input Image" className="slide-image" />
          <p className="caption">Input Image</p>
        </div>
        <div className="image-box">
          <img src={images.thirdpersonview} alt="3rd Person View" className="slide-image" />
          <p className="caption">3rd Person View</p>
        </div>
      </div>

      {/* Second Row with 2 images */}
      <div className="image-row row-two">
        <div className="image-box">
          <img src={images.gt} alt="Ground Truth" className="slide-image" />
          <p className="caption">Ground Truth</p>
        </div>
        <div className="image-box">
          <img src={images.fish2mesh} alt="Fish2mesh" className="slide-image" />
          <p className="caption">Fish2Mesh</p>
        </div>
      </div>

      {/* Third Row with 3 images */}
      <div className="image-row row-three">
        <div className="image-box">
          <img src={images.fourdhuman} alt="4D Human" className="slide-image" />
          <p className="caption">4DHuman</p>
        </div>
        <div className="image-box">
          <img src={images.egohmr} alt="FishViT" className="slide-image" />
          <p className="caption">EgoHMR</p>
        </div>
        <div className="image-box">
          <img src={images.fishvit} alt="Egohmr" className="slide-image" />
          <p className="caption">FishViT</p>
        </div>
      </div>
    </div>
  );
};

export default Slide;