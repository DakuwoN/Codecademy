const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const helper = require("../helpers/helper");


// Serialize user
passport.serializeUser((user, done) => {
  done(null, user.id); // Serialize the user ID to the session



// Deserialize a user
// Deserialize user
passport.deserializeUser((id, done) => {
  helper.findById(id, (err, user) => {
    if (err) {
      return done(err);
    }
    done(null, user); // The user object is attached to the request as req.user
  });
});

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const helper = require('../helpers/helper'); // Assuming this is your helper module with findByUsername

passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      const user = await helper.findByUsername(username);
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      // Use bcrypt to compare the provided password with the hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user); // Passwords match, return the user
    } catch (err) {
      return done(err);
    }
  }
));

const express = require('express');
const passport = require('passport');
const router = express.Router();

// Assuming you've already set up your Express app and Passport configuration

router.post('/login', passport.authenticate('local', {
  successRedirect: '/', // Redirect to a different URL on successful authentication
  failureRedirect: '/login', // Redirect back to the login page on failure
  failureFlash: false // Set to true if using connect-flash for flash messages
}));

// Logout route
router.get('/logout', (req, res) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/login'); // Redirect to login page after logout
  });
});

module.exports = router;
