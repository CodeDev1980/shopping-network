const ReviewsPost = require('../models/Reviews');

module.exports = async (req, res) => {
    const GuestReview = await ReviewsPost.find({}).limit(30).sort({_id: -1});
    res.render('reviews', {
        title: "Reviews Page",
        GuestReview
    })
}