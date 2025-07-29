// App.jsx
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import github from './assets/github.svg';
import pdf from './assets/pdf.svg';
import { ABSTRACT, INTRO1, INTRO10, INTRO11, INTRO2, INTRO3, INTRO4, INTRO5, INTRO6, INTRO7, INTRO8, INTRO9, OVERVIEW_DETAIL } from './constants';

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
          <h2 className="main-title">Fish2Mesh Transformer:</h2>
          <h2 className="subtitle">3D Human Mesh Reconstruction from Egocentric Vision</h2>

          {/* Author Names - Commented out for now
          <div className="authors-section">
            <div className="authors">
              <span className="author">
                David C.Jeong<sup>1</sup>
              </span>
              <span className="author">
                Aditya Puranik<sup>1</sup>
              </span>
              <span className="author">
                James Vong<sup>1</sup>
              </span>
              <span className="author">
                Vrushabh Abhijit Deogirikar<sup>1</sup>
              </span>
              <span className="author">
                Ryan Fell<sup>1</sup>
              </span>
              <span className="author">
                Julianna Dietrich<sup>1</sup>
              </span>
              <span className="author">
                Maria Kyrarini<sup>1</sup>
              </span>
              <span className="author">
                Christopher Kitts<sup>1</sup>
              </span>
            </div>
            <div className="affiliations">
              <span className="affiliation"><sup>1</sup>Santa Clara University, California</span>
            </div>
          </div>
          */}

          {/* Resource Buttons */}
          <div className="resource-buttons">
            <a href="https://arxiv.org/pdf/2503.06089" target="_blank" rel="noopener noreferrer" className="resource-btn">
              <img src={pdf} alt="Paper Icon" className="btn-icon" />
              Paper
            </a>
            <a href="https://arxiv.org/abs/2503.06089" target="_blank" rel="noopener noreferrer" className="resource-btn">
              <span className="btn-text">arXiv</span>
            </a>
            <a href="https://github.com/Santa-Clara-Imaginarium-Lab/Fish2Mesh-Human-Mesh-Recovery" target="_blank" rel="noopener noreferrer" className="resource-btn">
              <img src={github} alt="Code Icon" className="btn-icon" />
              Code
            </a>
          </div>

          {/* Video Embed */}
          <div className="video-container">
            <div style={{padding:"56.25% 0 0 0", position:"relative"}}>
              <iframe 
                src="https://player.vimeo.com/video/1105318531?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}} 
                title="fish2mesh_sample"
              ></iframe>
            </div>
          </div>
        </section>

        <section id="abstract" className="section">
          <h2 className="title">Abstract</h2>
          <p className="abstract-content">{ABSTRACT}</p>
        </section>

        <section id="overview" className="section">
          <h2 className="title">Summary</h2>
          <div className="overview_img">
            <img
              src={overviewImage}
              alt="Overview Illustration"
              style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
            />
          </div>
          <p className="abstract-content">{OVERVIEW_DETAIL}</p>
          
          {/* Video Section */}
          <h2 className="title">Video</h2>
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

        {/* Carousel Section */}
        <section id="results" className="section">
          <h2 className="title">Results</h2>
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </section>

        {/* Performance Analysis - First Table */}
        <section className="section">
          <h2 className="title">Performance Analysis</h2>
          
          <div className="table-container">
            <h3 className="table-title">Comparative results of model complexity</h3>
            <div className="table-wrapper">
              <table className="results-table">
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>GFLOPs</th>
                    <th>Parameters</th>
                    <th>Model Size</th>
                    <th>Inference</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>4DHumans</strong></td>
                    <td>125.64</td>
                    <td>730.3 M</td>
                    <td>2583.98 MB</td>
                    <td>14.21 ms</td>
                  </tr>
                  <tr>
                    <td><strong>EgoHMR</strong></td>
                    <td>12.47</td>
                    <td>46.0 M</td>
                    <td>1798.96 MB</td>
                    <td>5.61 ms</td>
                  </tr>
                  <tr>
                    <td><strong>FisheyeViT</strong></td>
                    <td>85.36</td>
                    <td>167.5 M</td>
                    <td>650.12 MB</td>
                    <td>9.88 ms</td>
                  </tr>
                  <tr className="highlight-row">
                    <td><strong>Fish2Mesh (Ours)</strong></td>
                    <td>4.74</td>
                    <td>7.5 M</td>
                    <td>48.19 MB</td>
                    <td>4.47 ms</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="demos" className="section">
          <h2 className="title">Demos</h2>
          <EmblaCarousel2 slides={SLIDES} options={OPTIONS} />
        </section>

        <section id="results-table" className="section">
          <div className="table-container">
            <h3 className="table-title">Evaluation results across 3 datasets, including MPJPE, MPVPE, PA-MPJPE, and PA-MPVPE (all in mm)</h3>
            <div className="table-wrapper">
              <table className="results-table">
                <thead>
                  <tr>
                    <th>Model</th>
                    <th>MPJPE</th>
                    <th>MPVPE</th>
                    <th>PA-MPJPE</th>
                    <th>PA-MPVPE</th>
                    <th>Dataset</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>4DHuman [15]</strong></td>
                    <td>390.037</td>
                    <td>521.349</td>
                    <td>90.037</td>
                    <td>129.849</td>
                    <td>ECHP</td>
                  </tr>
                  <tr>
                    <td><strong>FisheyeViT [26]</strong></td>
                    <td>4594.004</td>
                    <td>/</td>
                    <td>94.184</td>
                    <td>/</td>
                    <td>ECHP</td>
                  </tr>
                  <tr>
                    <td><strong>EgoHMR [17]</strong></td>
                    <td>84.332</td>
                    <td>99.983</td>
                    <td>64.112</td>
                    <td>79.031</td>
                    <td>ECHP</td>
                  </tr>
                  <tr className="highlight-row">
                    <td><strong>Fish2Mesh (ours)</strong></td>
                    <td>79.699</td>
                    <td>98.111</td>
                    <td>57.671</td>
                    <td>75.322</td>
                    <td>ECHP</td>
                  </tr>
                  <tr>
                    <td><strong>4DHuman [15]</strong></td>
                    <td>320.005</td>
                    <td>402.222</td>
                    <td>120.305</td>
                    <td>132.832</td>
                    <td>Ego4D</td>
                  </tr>
                  <tr>
                    <td><strong>FisheyeViT [26]</strong></td>
                    <td>491.975</td>
                    <td>/</td>
                    <td>91.975</td>
                    <td>/</td>
                    <td>Ego4D</td>
                  </tr>
                  <tr>
                    <td><strong>EgoHMR [17]</strong></td>
                    <td>224.423</td>
                    <td>311.129</td>
                    <td>114.423</td>
                    <td>128.999</td>
                    <td>Ego4D</td>
                  </tr>
                  <tr className="highlight-row">
                    <td><strong>Fish2Mesh (ours)</strong></td>
                    <td>71.934</td>
                    <td>84.116</td>
                    <td>41.931</td>
                    <td>54.756</td>
                    <td>Ego4D</td>
                  </tr>
                  <tr>
                    <td><strong>4DHuman [15]</strong></td>
                    <td>298.233</td>
                    <td>320.944</td>
                    <td>98.613</td>
                    <td>120.304</td>
                    <td>Our</td>
                  </tr>
                  <tr>
                    <td><strong>FisheyeViT [26]</strong></td>
                    <td>493.117</td>
                    <td>/</td>
                    <td>93.547</td>
                    <td>/</td>
                    <td>Our</td>
                  </tr>
                  <tr>
                    <td><strong>EgoHMR [17]</strong></td>
                    <td>227.552</td>
                    <td>294.484</td>
                    <td>127.55</td>
                    <td>144.184</td>
                    <td>Our</td>
                  </tr>
                  <tr className="highlight-row">
                    <td><strong>Fish2Mesh (ours)</strong></td>
                    <td>57.352</td>
                    <td>71.233</td>
                    <td>37.242</td>
                    <td>51.58</td>
                    <td>Our</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="citation" className="section">
          <h2 className="title">BibTeX</h2>
          <div className="code-block">
            <pre>
              <code>
{`@article{jeong2025fish2mesh,
  author    = {David C.Jeong, Aditya Puranik, James Vong, Vrushabh Abhijit Deogirikar, Ryan Fell, Julianna Dietrich, Maria Kyrarini, Christopher Kitts},
  title     = {Fish2Mesh Transformer: 3D Human Mesh Reconstruction from Egocentric Vision},
  journal   = {ICCV},
  year      = {2025},
}`}
              </code>
            </pre>
          </div>
        </section>

        


        {/* <section id="acknowledgement" className="section">
          <h2 className="title">Acknowledgement</h2>
          <p>Acknowledging contributions and collaborators</p>
        </section> */}
      </main>
    </div>
  );
};

export default App;
