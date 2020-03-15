import React from 'react';

import MobileHeaderBanner from './frontend/components/MobileHeaderBanner/MobileHeaderBanner';
import MobileNavBar from './frontend/components/MobileNavBar/MobileNavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <MobileNavBar />
      <MobileHeaderBanner />
      <div className='latest-episode outer-container'></div>
    </div>
  );
}

export default App;