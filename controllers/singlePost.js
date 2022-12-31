const SinglePost = require('../models/BlogPost');

module.exports = async (req, res) => {
    const blog = await SinglePost.findById(req.params.id).populate('userid');
    res.render('post', {
        title: "Express Blog Post",
        blog
    })
}