import React from 'react'
import './LinkButtons.css'

export default function LinkButtons() {
    return (
      <div className='link-buttons'>
        <button className='link-button'>
          <h3 className='button-name'>Apple Podcast</h3>
        </button>
        <button className='link-button'>
          <h3 className='button-name'>Spotify</h3>
        </button>
        <button className='link-button'>
          <h3 className='button-name'>YouTube</h3>
        </button>
        <button className='link-button'>
          <h3 className='button-name'>Join our email list</h3>
        </button>
      </div>
    );
}