const express = require("express");
const router = express.Router();
const helper = require("../helpers/helper");
const passport = require("passport");
const filename = "./data/users.json";
const bcrypt = require("bcrypt");
let users = require("../data/users.json");

// Register New User:
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const id = { id: helper.getNewId(users) };
  try {
    const user = await helper.userExists(username);
    if (user) {
      console.log("User already exists!");
      return res.redirect("login");
    }
    // Hash password before storing in local DB:
    const saltRounds = 10;

    const salt = bcrypt.genSalt(saltRounds);
    const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Generate a salt
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    // Hash the plaintext password
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Create a new user object with the hashed password
    const newUser = {
      // Assuming you have a way to generate a unique ID for the user
      id: generateUniqueId(), // Replace generateUniqueId() with your ID generation logic
      username: username,
      password: hashedPassword, // Use the hashed password
    };

    // Store the newUser object in the database
    // Replace this with your actual database storage logic
    await saveUserToDatabase(newUser);

    const newUser = { ...id, username, password: password };

    // Store new user in local DB
    await users.push(newUser);
    await helper.writeJSONFile(filename, users);

    res.redirect("login");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Log In User:
router.post("/login", (req, res) => {
  res.redirect("../");
});

// Log out user:
router.get("/logout", (req, res) => {
  res.redirect("../");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
