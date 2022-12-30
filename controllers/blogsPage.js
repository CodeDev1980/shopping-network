// DB Feed
const BlogPost = require('../models/BlogPost');

module.exports = async (req, res) => {
    const articles = await BlogPost.find({}).limit(3).sort({_id: -1}).populate("userid");
    res.render('blogs', {
        articles,
        title: "Express Blogs Page"
    })
}