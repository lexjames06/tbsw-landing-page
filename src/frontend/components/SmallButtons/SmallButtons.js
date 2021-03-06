import React from 'react';
import facebook from './frontend/assets/icons/facebook.svg'
import instagram from './frontend/assets/icons/instagram.svg'
import spotify from './frontend/assets/icons/spotify.svg'
import youtube from './frontend/assets/icons/youtube.svg'

import './SmallButtons.css'

export default function SmallButtons() {
    return (
      <div className='small-buttons'>
        <button className='small-button'>
          <a href='https://www.google.com'>
            <img src={facebook} alt='facebook' />
          </a>
        </button>
        <button className='small-button'>
          <a href='https://www.google.com'>
            <img src={instagram} alt='instagram' />
          </a>
        </button>
        <button className='small-button'>
          <a href='https://www.google.com'>
            <img src={spotify} alt='spotify' />
          </a>
        </button>
        <button className='small-button'>
          <a href='https://www.google.com'>
            <img src={youtube} alt='youtube' />
          </a>
        </button>
      </div>
    );
}