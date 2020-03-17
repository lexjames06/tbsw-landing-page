const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    blogTitle: { type: String, required: true },
    tags: [{ type: String }],
    blogBody: { type: String, required: true },
    readTime: { type: Number, required: true },
    postDate: { type: Date, required: true },
    cover: { data: Buffer, contentType: String },
    pictures: [{ data: Buffer, conentType: String }]
}, {
    timestamps: true,
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;