const SinglePost = require("../models/BlogPost");

module.exports = async (req, res) => {
    const blog = SinglePost.findById(req.params.id).populate('userid');
    res.redner('post', {
        title: "Blog Post Page",
        blog
    })
}