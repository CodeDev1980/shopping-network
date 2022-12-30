// DB Feed
const BlogPost = require('../models/BlogPost');
const ReviewsPost = required('../models/Reviews.js');

module.exports = async (req, res) => {
    const articles = await BlogPost.find({}).limit(3).sort({_id: -1}).populate("userid");
    const reviews = await ReviewsPost.find({}).limit(1).sort({_id: -1})
    res.render('index', {
        articles, reviews,
        title: "Express Shopping - Home Page"
    })
}