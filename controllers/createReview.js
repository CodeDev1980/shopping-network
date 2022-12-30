const ReviewsPost = require('../models/Reviews');

module.exports = async (req, res) => {
    const GuestReview = await ReviewsPost.find({}).limit(4).sort({_id: -1});
    res.render("createReview", {
        title: "Write a New Review",
        GuestReview
    })
}