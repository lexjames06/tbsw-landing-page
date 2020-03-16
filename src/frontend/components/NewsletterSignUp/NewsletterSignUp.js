import React from 'react';

import './NewsletterSignUp.css';

export default function NewsletterSignUp() {
    return (
      <div className='newsletter-signup outer-container'>
        <h2>Be a part of the b-side newsletter family</h2>
        <form>
          <input type='email' placeholder='example@gmail.com' />
          <button type='submit'><h3>Join</h3></button>
        </form>
      </div>
    );
}