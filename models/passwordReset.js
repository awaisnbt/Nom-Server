const mongoose = require("mongoose");

// Define User Schema
const ResetSchema = new mongoose.Schema({
  prevPassword: {
    type: String,
    required: true,
  },
  newPassword: {
    type: String,
    required: true,
  },
});

// Create User Model
const Reset = mongoose.model("Reset", ResetSchema);

module.exports = Reset;
