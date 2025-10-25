const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
module.exports.createReview = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  const newReview = new Review(req.body.review);
  newReview.author = req.user._id;
  listing.reviews.push(newReview);
  await newReview.save();
  await listing.save();
  res.redirect(`/listings/${id}`);
};
module.exports.destroyReview = async (req, res) => {
  let { id, reviewID } = req.params;
  await Review.findByIdAndDelete(reviewID);
  await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewID } });
  req.flash("error", "Review Deleted!");
  res.redirect(`/listings/${id}`);
};
