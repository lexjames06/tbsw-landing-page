import React, { useState } from 'react';

import './MobileNavBar.css'

export default function MobileNavBar() {

    const [searchSelected, setSearchSelected] = useState('false');
    const [menuSelected, setMenuSelected] = useState('false');
  
    function toggleSearchSelected() {
      setSearchSelected(
        searchSelected === 'false' ? 'true' : 'false'
      );
    }
  
    function toggleMenuSelected() {
      setMenuSelected(
        menuSelected === 'false' ? 'true' : 'false'
      );
    }
  
    function searchSubmit(e) {
      e.preventDefault();
    }
  
    return (
      <div className='navbar outer-container'>
        <div className='icon search' onClick={toggleSearchSelected}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/>
          </svg>
        </div>
        <div className='search-bar'>
          <form onSubmit={e => searchSubmit(e)}>
            <input type='text' name={searchSelected} placeholder='search...'/>
            <button type='submit' name={searchSelected}>
              <svg width="30" height="30" viewBox="0 0 30 30">
                <path d="M13 18v-4h-7v-4h7v-4l6 6-6 6zm-1-16c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"/>
              </svg>
            </button>
          </form>
        </div>
        <div className='icon menu' onClick={toggleMenuSelected}>
          <div className='bun top' name={menuSelected}></div>
          <div className='bun bottom' name={menuSelected}></div>
        </div>
      </div>
    );
}