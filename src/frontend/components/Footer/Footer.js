import React from 'react';

import './Footer.css';

export default function Footer() {

    const date = new Date();
    const year = date.getFullYear();
  
    return (
      <div className='footer outer-container'>
        <h5>The B-Side Word Podcast © {year}</h5>
      </div>
    );
}