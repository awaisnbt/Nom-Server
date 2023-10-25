const express = require("express");
const sectionController = require("../controller/logoController"); // Adjust the path
const router = express.Router();

// route to update Section 1 data
router.post("/logo/update", sectionController.updateLogo);

// Get Section data by section number
router.get("/logo/get", sectionController.getLogo);

// Handle bulk section data insertion
router.post("/logo/create", sectionController.createLogo);

module.exports = router;
 