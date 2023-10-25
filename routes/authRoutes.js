const express = require("express");
const authController = require("../controller/authController"); // Adjust the path

const router = express.Router();

// Signup Route
// router.post("/signup", authController.signup);

// Login route
router.get("/getUser", authController.getUser);
router.post("/login", authController.login);
router.post("/password/reset", authController.resetPassword);

module.exports = router;
