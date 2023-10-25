const Contact = require("../models/contact");

const updateContact = async (req, res) => {
  // const partNumber = req.params.sectionNumber;
  // const { heading, para } = req.body;

  try {
    // Find and update the section based on sectionNumber
    const id = "nbt@unique"
    const updatedSection = await Contact.findOneAndUpdate(
      { uniqueId: id },
      { $set:{
        ...req.body
      } },
      { new: true }
    );

    res.json({
      message: "Value Part updated successfully",
      section: updatedSection,
    });
  } catch (error) {
    console.error("Error updating Value Part:", error);
    res.status(500).json({ message: "Failed to update Value" });
  }
};

const getContactInfo = async (req, res) => {
  try {
    // const partNumber = req.params.sectionNumber;

    // Find data in Section model based on section number
    const sectionData = await Contact.find({});

    if (!sectionData) {
      return res.status(404).json({ message: "Value data not found" });
    }

    res.status(200).json(sectionData);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error });
  }
};



const addContact = async (req, res) => {
    try {
      // const sectionNumber = req.params.sectionNumber;
        // req.body.partNumber = parseInt(sectionNumber)

      req.body.uniqueId = "nbt@unique"
      // Find data in Section model based on section number
      const sectionData = await Contact.create(req.body);

      console.log(sectionData, 'sectionData');
      if (!sectionData) {
        return res.status(404).json({ message: "value cannot added" });
      }
  
      res.status(200).json(sectionData);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };


module.exports = {
  addContact,
  getContactInfo,
  updateContact
};
