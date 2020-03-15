import React, { useState, useEffect } from 'react';

import MobileHeaderBanner from './frontend/components/MobileHeaderBanner/MobileHeaderBanner';
import MobileNavBar from './frontend/components/MobileNavBar/MobileNavBar';
import LatestEpisodeBanner from './frontend/components/LatestEpisodeBanner/LatestEpisodeBanner';
import IntroBanner from './frontend/components/IntroBanner/IntroBanner';
import About from './frontend/components/About/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <MobileNavBar />
      <MobileHeaderBanner />
      <IntroBanner />
      <LatestEpisodeBanner />
      <About />
      {/* <Blog /> */}
    </div>
  );
}

function Blog() {
  return (
    <div className='blog outer-container'>
      <h1>Blog</h1>
      <div className='latest-blog'>
        <div className='blog-image'></div>
        <div className='blog-text'>
          <h3>
            
          </h3>
          <p>

          </p>
        </div>
      </div>
    </div>
  );
}

export default App;