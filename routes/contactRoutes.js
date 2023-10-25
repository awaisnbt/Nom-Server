const express = require("express");
const valueController = require("../controller/contactController"); // Adjust the path
const router = express.Router();

// route to update Section 1 data
router.post("/contact/update", valueController.updateContact);

// Get Section data by section number
router.get("/contactInfo", valueController.getContactInfo);

// Handle bulk section data insertion
router.post("/contact/create", valueController.addContact);

module.exports = router;
