// App.jsx
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import github from './assets/github.svg';
import pdf from './assets/pdf.svg';
import { ABSTRACT, OVERVIEW_DETAIL } from './constants';

import './carousel/css/base.css';
import './carousel/css/embla.css';
import './carousel/css/sandbox.css';
import EmblaCarousel from './carousel/js/EmblaCarousel';
import EmblaCarousel2 from './carousel/js/EmblaCarousel2';

import overviewImage from './assets/frame.svg';

// Carousel settings
const OPTIONS = {dragFree: true, loop: true};
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());


const App = () => {
  return (
    <div className="App">
      {/* Navbar */}
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <section id="about" className="section">
          <h2  className="main-title">Fish2Mesh Transformer:</h2>
          <h2 className="title">3D Human Mesh Reconstruction from Egocentric Vision</h2>

          {/* Logo and Links
          <div className="icon-links">
            <a href="/path/to/pdf" target="_blank" rel="noopener noreferrer" className="icon-link">
              <img src={pdf} alt="PDF Icon" className="icon" />
            </a>
            <a href="https://github.com/Santa-Clara-Imaginarium-Lab/Fish2Mesh-Human-Mesh-Recovery" target="_blank" rel="noopener noreferrer" className="icon-link">
              <img src={github} alt="GitHub Icon" className="icon" />
            </a>
          </div> */}

          {/* Video Embed */}
          <div className="video-container">
            <iframe
            className="iframe"
              width="100%"
              height="500"
              src="https://player.vimeo.com/video/1025654876?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              title="AI_Team_Compiled_Video"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        <section id="abstract" className="section">
          <h2 className="title">Abstract</h2>
          <p className="abstract-content">{ABSTRACT}</p>
        </section>

        <section id="overview" className="section">
          <h2 className="title">Overview</h2>
          <div className="overview_img">
            <img
              src={overviewImage}
              alt="Overview Illustration"
              style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
            />
          </div>
          <p className="abstract-content">{OVERVIEW_DETAIL}</p>
        </section>

        {/* Carousel Section */}
        <section id="results" className="section">
          <h2 className="title">Results</h2>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </section>

        <section id="demos" className="section">
          <h2 className="title">Demos</h2>
          <EmblaCarousel2 slides={SLIDES} options={OPTIONS} />
        </section>


        <section id="acknowledgement" className="section">
          <h2 className="title">Acknowledgement</h2>
          <p>Acknowledging contributions and collaborators</p>
        </section>

        <section id="citations" className="section">
          <h2 className="title">Citation</h2>
          <div className="code-block">
            <pre>
              <code>
                {`Test Citations`}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
