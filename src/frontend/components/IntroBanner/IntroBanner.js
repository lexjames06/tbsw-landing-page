import React, { useState, useEffect } from 'react';

import './IntroBanner.css'

export default function IntroBanner() {

    const [reviewNumber, setReviewNumber] = useState(0);
    const [reviewPlacement, setReviewPlacement] = useState('middle');
  
    const reviews = [
      { review: 'Hilarious and brilliant', rating: 5 },
      { review: 'Easy listening', rating: 4 },
      { review: 'Fun and lighthearted', rating: 5 },
    ]  
  
    function printStars(rating) {
      const ratingArray = [];
      for(let i = 0; i < rating; i++) {
        ratingArray.push(i);
      };
      return ratingArray.map(rating => {
        return (
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/>
          </svg>
        );
      });
    }
  
    useEffect(() => {
      setTimeout(() => {
        setReviewPlacement('left')
        setTimeout(() => {
          setReviewNumber(
            reviewNumber === reviews.length - 1 ? 
              0 : 
              reviewNumber + 1
          )
          setReviewPlacement('right')
          setTimeout(() => {
            setReviewPlacement('middle')
          }, 100)
        }, 200)
      }, 5000)
    }, [reviewNumber])
  
    return (
      <div className='intro-banner outer-container'>
        <h2>The B-Side Word Podcast</h2>
        {
          reviews.map((review, index, array) => {
            if(index === reviewNumber) {
              return (
                <div className='review' name={reviewPlacement} key={index}>
                  <h3>"{review.review}"</h3>
                  <div className='star-rating'>
                    {printStars(review.rating)}
                  </div>
                </div>
              );
            }
          })
        }
      </div>
    );
}