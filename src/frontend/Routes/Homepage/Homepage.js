import React from 'react';

import MobileHeaderBanner from '../../components/MobileHeaderBanner/MobileHeaderBanner';
import MobileNavBar from '../../components/MobileNavBar/MobileNavBar';
import LatestEpisodeBanner from '../../components/LatestEpisodeBanner/LatestEpisodeBanner';
import IntroBanner from '../../components/IntroBanner/IntroBanner';
import About from '../../components/About/About';
import HomepageBlog from '../../components/HomepageBlog/HomepageBlog';
import NewsletterSignUp from '../../components/NewsletterSignUp/NewsletterSignUp';
import Footer from '../../components/Footer/Footer';

import './Homepage.css';

export default function Homepage() {
  return (
    <div className="app outer-container">
      <div className='app inner-container' id='app1'>
        <LatestEpisodeBanner />
      </div>
      <div className='app inner-container' id='app2'>
        <MobileNavBar />
        <MobileHeaderBanner />
        <IntroBanner />
        <About />
        <HomepageBlog />
        <NewsletterSignUp />
        <Footer />
      </div>
    </div>
  );
}