const ReviewsPost = require('../models/Reviews');

module.exports = async (req, res) => {
    await ReviewsPost.create({
        ...req.body,
    })
    res.redirect('/reviews')
}