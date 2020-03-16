import React from 'react';

import blogImage1 from '../../assets/images/blog-cover-1.jpeg';
import blogImage2 from '../../assets/images/blog-cover-2.jpeg';
import blogImage3 from '../../assets/images/blog-cover-3.jpeg';
import blogImage4 from '../../assets/images/blog-cover-4.jpeg';
import blogImage5 from '../../assets/images/blog-cover-5.jpeg';
import './HomepageBlog.css';

export default function HomepageBlog() {

    const blogs = [
      { title: 'This is blog title 1', body: 'This is example text of what could possibly be inside one of the blogs that might be written on the website with hopefully better grammar than this unnecessarily long run on sentence.', image: blogImage1 },
      { title: 'Blog title 2', body: 'This is example text of what could possibly be inside one of the blogs that might be written on the website with hopefully better grammar than this unnecessarily long run on sentence.', image: blogImage2 },
      { title: 'Blog title 3', body: 'This is example text of what could possibly be inside one of the blogs that might be written on the website with hopefully better grammar than this unnecessarily long run on sentence.', image: blogImage3 },
      { title: 'Blog title 4', body: 'This is example text of what could possibly be inside one of the blogs that might be written on the website with hopefully better grammar than this unnecessarily long run on sentence.', image: blogImage4 },
      { title: 'Blog title 5', body: 'This is example text of what could possibly be inside one of the blogs that might be written on the website with hopefully better grammar than this unnecessarily long run on sentence.', image: blogImage5 }
    ];
  
    function displayLatest() {
      return blogs.map((blog, index) => {
        if(index === 0) {
          const blogChars = blog.body.split('');
          const blogPreview = blogChars.reduce((newArray, char, index) => {
              if(index < 100) {
                newArray.push(char);
              }
              return newArray;
            }, []).join('');
          console.log(blogPreview);
          return (
            <div className='latest-blog'>
              <div className='blog-image'>
                <img src={blog.image} alt='' />
              </div>
              <div className='blog-text'>
                <h3>
                  {blog.title}
                </h3>
                  {
                    blogChars.length > 100 ?
                      <p>{blogPreview}<span>...read more</span></p> :
                      <p>{blog.body}</p>
                  }
              </div>
            </div>
          );
        };
      })
    }
  
    function displayRest() {
      return blogs.map((blog, index) => {
        if(index !== 0) {
          const blogChars = blog.body.split('');
          const blogPreview = blogChars.reduce((newArray, char, index) => {
              if(index < 50) {
                newArray.push(char);
              }
              return newArray;
            }, []).join('');
          console.log(blogPreview);
          return (
            <div className='recent-blog' key={index}>
              <div className='blog-image'>
                <img src={blog.image} alt='' />
              </div>
              <div className='blog-text'>
                <h3>
                  {blog.title}
                </h3>
              </div>
            </div>
          );
        };
      })
    }
  
  
    return (
      <div className='blog outer-container'>
        <h1>Blog</h1>
        <h3 id='sub-header'>Quick Dives</h3>
        <h3 id='header'>Latest blog post:</h3>
        {displayLatest()}
        <h3 id='header'>Other blog posts:</h3>
        <div className='recent-blogs'>
          {displayRest()}
        </div>
      </div>
    );
};