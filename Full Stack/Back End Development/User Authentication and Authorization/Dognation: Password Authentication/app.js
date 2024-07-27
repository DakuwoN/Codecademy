// Import packages
const express = require("express");
const app = express();
const session = require("express-session");
const passport = require("passport");
const helper = require('../helpers/helper');

const LocalStrategy = require('passport-local').Strategy;

// App config
app.set("trust proxy", 1);
const PORT = process.env.PORT || 4001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");
// Import Passport config
require("./config/passport");

// Session Config
app.use(session({
  secret: 'yourRandomStringHere', // Replace 'yourRandomStringHere' with a random string for security
  cookie: {
    maxAge: 3600000, // Example: 1 hour (3600000 milliseconds)
    sameSite: 'none', // Important for cross-site requests
    secure: true, // True ensures the cookie is only used over HTTPS
  },
  saveUninitialized: false, // Do not save uninitialized sessions
  resave: false, // Do not automatically re-save sessions
}));


// Passport Config
// Initialize Passport
app.use(passport.initialize());
// Use Passport session
app.use(passport.session());

passport.use(new LocalStrategy(
  async (username, password, done) => {
    try {
      // Use your helper function to find the user by username
      const user = await helper.findByUsername(username, (err, user) => {
        if (err) return done(err);

    if (!user) return done(null, false);

    if(user.password != password) return done(null, false)

    return done(null, user)
      });    
))};



// Routes
app.use(require("./routes/index.routes"));

app.get("/", (req, res) => {
  const user = req.user || "Guest"; // Use the user object if available, otherwise default to "Guest"
  res.render("home", { user: user }); // Pass the user object to your template
});



app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
