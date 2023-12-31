const Services = require("../models/servicemodel"); // Adjust the path to your Section 1 model

const updateService = async (req, res) => {
  const partNumber = req.params.sectionNumber;
  const { heading, para, color } = req.body;
  console.log(req.body);

  try {
    // Find and update the section based on sectionNumber
    const updatedSection = await Services.findOneAndUpdate(
      { partNumber },
      { 
        $set: {
          ...req.body
        }
       },
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

const getservicebynumber = async (req, res) => {
  try {
    const partNumber = req.params.sectionNumber;

    // Find data in Section model based on section number
    const sectionData = await Services.findOne({ partNumber });

    if (!sectionData) {
      return res.status(404).json({ message: "Value data not found" });
    }

    res.status(200).json(sectionData);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};



const Addservicenumber = async (req, res) => {
    try {
      const sectionNumber = req.params.sectionNumber;
        req.body.partNumber = parseInt(sectionNumber)

      // Find data in Section model based on section number
      const sectionData = await Services.create(req.body);
  
      if (!sectionData) {
        return res.status(404).json({ message: "value cannot added" });
      }
  
      res.status(200).json(sectionData);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };


module.exports = {
    updateService,
    getservicebynumber,
    Addservicenumber
};
