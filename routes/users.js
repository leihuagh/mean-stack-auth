const express = require('express');
const router = express.Router();

// Register
router.get('/register', (req, res, next) => {
    res.send("REGISTER");
});

// Login
router.get('/login', (req, res, next) => {
    res.send("LOGIN");
});

// Profile
router.get('/profile', (req, res, next) => {
    res.send("PROFILE");
});

module.exports = router;