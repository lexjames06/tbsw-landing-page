import React, { useState, useEffect } from 'react';

import MobileHeaderBanner from './frontend/components/MobileHeaderBanner/MobileHeaderBanner';
import MobileNavBar from './frontend/components/MobileNavBar/MobileNavBar';
import LatestEpisodeBanner from './frontend/components/LatestEpisodeBanner/LatestEpisodeBanner';
import IntroBanner from './frontend/components/IntroBanner/IntroBanner';
import About from './frontend/components/About/About';
import HomepageBlog from './frontend/components/HomepageBlog/HomepageBlog';
import './App.css';

function App() {
  return (
    <div className="App">
      <MobileNavBar />
      <MobileHeaderBanner />
      <IntroBanner />
      <LatestEpisodeBanner />
      <About />
      <HomepageBlog />
    </div>
  );
}

export default App;