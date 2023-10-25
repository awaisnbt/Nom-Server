const mongoose = require("mongoose");

const logoSchema = new mongoose.Schema({
  logoImage: String,
  uniqueLogo: String,
  width: Number,
  height: Number
});

const Logo = mongoose.model("Logo", logoSchema);

module.exports = Logo;
