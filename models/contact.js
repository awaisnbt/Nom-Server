const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    uniqueId: String,
  heading: String,
  desp: String,
  headOfficeName: String,
  headOfficeAddress: String,
  headOfficeEmail: String,
  headOfficeNumber1: String,
  headOfficeNumber2: String,
  location1Name: String,
  location1Address: String,
  location2Name: String,
  location2Address: String,
  location3Name: String,
  location3Address: String,
  location4Name: String,
  location4Address: String,
  location5Name: String,
  location5Address: String,
  location6Name: String,
  location6Address: String,
  heading1color: String,
  heading2color: String,
  heading3color: String,
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
