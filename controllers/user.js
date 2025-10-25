const User = require("../models/user.js");
module.exports.renderSignupForm = (req, res) => {
  res.render("user/signup");
};
module.exports.signup = async (req, res, next) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ username, email });
    const registeredUser = await User.register(newUser, password);
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      } else {
        req.flash("success", "Welcome to wanderlust!");
        res.redirect("/listings");
      }
    });
  } catch (err) {
    req.flash("error", "User already registered!");
    res.redirect("/signup");
  }
};
module.exports.renderLoginForm = (req, res) => {
  res.render("user/login");
};
module.exports.login = async (req, res) => {
  req.flash("success", "Welcome to wanderlust!");
  res.redirect(res.locals.redirectUrl);
};
module.exports.logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    } else {
      req.flash("error", "Logged Out");
      res.redirect("/listings");
    }
  });
};
module.exports.renderHomePage = (req, res) => {
  res.render("user/profile.ejs", { user: req.user });
};
