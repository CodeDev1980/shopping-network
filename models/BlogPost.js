const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema ({
    title: String,
    body: String,
    image: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    datePosted: {
        type: Date,
        default: new Date
    }
})

const BlogPost = mongoose.model('BlogPost', BlogPostSchema);
module.exports = BlogPost;