const mongoose = require("mongoose");

const valuesSchema = new mongoose.Schema({
  heading: String,
  para: String,
  color: String,
  partNumber: Number,
  createdAt: { type: Date, default: Date.now }
});

const Values = mongoose.model("Values", valuesSchema);

module.exports = Values;
