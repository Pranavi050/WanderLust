const Listing = require("./models/listing");
const Review = require("./models/review.js");
const { ListingSchema, reviewSchema } = require("./Schema.js");
const ExpressError = require("./utils/ExpressError.js");

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "You Must Be Logged In!");
    return res.redirect("/login");
  }
  next();
};
module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};
module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }

  if (
    !listing.owner[0] ||
    listing.owner[0].toString() !== res.locals.currUser._id.toString()
  ) {
    req.flash("error", "Mat Kar Lala! Mat Kar!");
    return res.redirect(`/listings/${id}`);
  }

  next();
};

module.exports.isReviewAuthor = async (req, res, next) => {
  const { reviewID, id } = req.params;
  const review = await Review.findById(reviewID);

  if (!review) {
    req.flash("error", "Review not found!");
    return res.redirect(`/listings/${id}`);
  }
  if (
    !review.author ||
    review.author.toString() !== res.locals.currUser._id.toString()
  ) {
    req.flash("error", "Mat Kar Lala! Mat Kar!");
    return res.redirect(`/listings/${id}`);
  }

  next();
};
module.exports.validateListing = (req, res, next) => {
  let { error } = ListingSchema.validate(req.body);
  if (error) {
    throw new ExpressError(402, "Page not found");
  } else {
    next();
  }
};
module.exports.validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    throw new ExpressError(402, "Page not found");
  } else {
    next();
  }
};
