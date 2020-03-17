import React, { useState } from 'react';
import axios from 'axios';

import './BlogsForm.css';

export default function BlogsForm() {

    const [blogTitle, setBlogTitle] = useState('');
    const [blogBody, setBlogBody] = useState('');
    const [tags, setTags] = useState([]);

    function handleBlogTitle(e) {
        setBlogTitle(e.target.value);
    }

    function handleBlogBody(e) {
        setBlogBody(e.target.value);
    }

    function handleTags(e) {
        const tags = e.target.value.split(',');
        setTags(tags);
    }

    function onSubmit(e) {
        e.preventDefault();

        const date = new Date();
        const blogLength = blogBody.split(' ').length;
        const readTime = Math.ceil(blogLength / 200);

        const blog = {
            blogTitle: blogTitle,
            blogBody: blogBody,
            tags: tags,
            readTime: readTime,
            postDate: date,
        }

        setBlogTitle('');
        setBlogBody('');
        setTags([]);

        console.log(blog);


        axios.post('http://localhost:3001/blogs/add', blog)
            .then(res => console.log(res.data))

    }


    return (
        <div className='blogs-form outer-container'>
            <form onSubmit={e => onSubmit(e)}>
                <label>Blog Title</label>
                <input 
                    name='blogTitle' 
                    type='text' 
                    value={blogTitle}
                    onChange={e => handleBlogTitle(e)} 
                    required />
                <label>Tags</label>
                <input 
                    name='tags' 
                    type='text' 
                    value={tags}
                    onChange={e => handleTags(e)}  />
                <label>Blog Body</label>
                <textarea 
                    name='blogBody' 
                    type='text' 
                    value={blogBody}
                    onChange={e => handleBlogBody(e)}  />
                <button 
                    name='submitButton' 
                    type='submit'>
                    Publish
                </button>
            </form>
        </div>
    );
}