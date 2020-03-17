import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Blogs.css';
import axios from 'axios';

export default function Blogs() {

    const [blogs, setBlogs] = useState([]);
    const [blogsLoaded, setBlogsLoaded] = useState(false);

    function getBlogs() {
        return blogs.map(({blogTitle, blogBody, tags, postDate, readTime}) => {
                        
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November' ,'December']
            const fullDate = new Date(postDate);
            const blogMonth = months.find((months, index) => {
                return fullDate.getMonth() === index;
            });
            const blogDate = fullDate.getDate();
            const blogYear = fullDate.getFullYear();
            const blogCreated = `${blogMonth} ${blogDate}, ${blogYear}`;

            const blogChars = blogBody.split('');
            const blogPreview = blogChars.reduce((newArray, char, index) => {
                if(index < 100) {
                    newArray.push(char);
                }
                return newArray;
                }, []).join('');

            const kebabTitle = blogTitle.toLowerCase().split(' ').join('-');
            const url = `/blogs/${kebabTitle}`

            return (
                <div className='blog-preview'>
                    <Link to={url}><div id='blog-title'><h2>{blogTitle}</h2></div></Link>
                    <div id='tags'>{tags}</div>
                    <div id='read-time'>({readTime} minute read)</div>
                    <div id='blog-preview'>{blogPreview}
                        <span>
                            {blogBody.length > 100 ? ' ...read more' : ''}
                        </span>
                    </div>
                    <div id='blog-date'>{blogCreated}</div>
                </div>
            );
        })
    }

    useEffect(() => {
        blogsLoaded === false && 
        axios.get('http://localhost:3001/blogs/')
            .then(res => {
                if(res.data.length > 0) {
                    setBlogs(res.data.map(blog => {
                        return { 
                            blogTitle: blog.blogTitle,
                            blogBody: blog.blogBody,
                            tags: blog.tags.join(', '),
                            postDate: blog.postDate,
                            readTime: blog.readTime,
                        };
                    }))
                }
            })
            .then(() => console.log(blogs))
            .then(() => setBlogsLoaded(true));
    })

    return (
        <div className='blogs outer-container'>
            <div className='blogs inner-container'>
                {getBlogs()}
            </div>
        </div>
    );
}