import React from 'react';

import './MobileHeaderBanner.css';

export default function MobileHeaderBanner() {
    return (
      <div className='header-banner outer-container'>
        <div className='header-banner inner-container'>
          <div className='stripe cj'>
            <h1>CJ</h1>
          </div>
          <div className='stripe dev'>
            <h1>Dev</h1>
          </div>
          <div className='stripe emma'>
            <h1>Ems</h1>
          </div>
          <div className='stripe lex'>
            <h1>Lex</h1>
          </div>
          <div className='stripe maxie'>
            <h1>Max</h1>
          </div>
        </div>
      </div>
    );
}