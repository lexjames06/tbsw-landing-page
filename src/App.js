import React from 'react';

import MobileHeaderBanner from './frontend/components/MobileHeaderBanner/MobileHeaderBanner';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <MobileNavBar /> */}
      <MobileHeaderBanner />
    </div>
  );
}

function MobileNavBar() {
  return (
    <div className='navbar outer-container'>
      <div className='icon search'></div>
      <div className='search-bar'>
        <input type='text' />
      </div>
    </div>
  );
}

export default App;