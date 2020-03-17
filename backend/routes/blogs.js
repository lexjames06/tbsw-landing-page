const router = require('express').Router();
const Blog = require('../models/blogs.model');

router.route('/').get((req, res) => {
    Blog.find()
        .then(blogs => res.json(blogs))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const blogTitle = req.body.blogTitle;
    const tags = req.body.tags;
    const blogBody = req.body.blogBody;
    const readTime = Number(req.body.readTime);
    const postDate = Date.parse(req.body.postDate);

    const newBlog = new Blog({
        blogTitle,
        tags,
        blogBody,
        readTime,
        postDate
     });

    newBlog.save()
        .then(() => res.json('Blog added!'))
        .catch(err => res.status(400).json('Error ' + err));
})

router.route('/:id').get((req, res) => {
    Blog.findById(req.params.id)
        .then(blog => res.json(blog))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Blog.findByIdAndDelete(req.params.id)
        .then(() => res.json('Blog deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Blog.findById(req.params.id)
        .then(blog => {
            blog.bogTitle = req.body.blogTitle;
            blog.tags = req.body.tags;
            blog.blogBody = req.body.blogBody;
            blog.readTime = Number(req.body.readTime);
            blog.postDate = Date.parse(req.body.postDate);

            blog.save()
                .then(() => res.json('Blog updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;