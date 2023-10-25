const Logo = require("../models/logoModel"); // Adjust the path to your Section 1 model

const updateLogo = async (req, res) => {

  try {
    const unique = "nomAdz@unique"

    // Find and update the section based on sectionNumber
    const updatedSection = await Logo.findOneAndUpdate(
      { uniqueLogo: unique },
      {
        $set:{
          ... req.body
        }
      },
      { new: true }
    );

    res.json({
      message: "Section updated successfully",
      section: updatedSection,
    });
  } catch (error) {
    console.error("Error updating section:", error);
    res.status(500).json({ message: "Failed to update section" });
  }
};

const getLogo = async (req, res) => {
  try {
    const unique = "nomAdz@unique"
    // Find data in Section model based on section number
    const sectionData = await Logo.findOne({ uniqueLogo: unique });

    if (!sectionData) {
      return res.status(404).json({ message: "Section data not found" });
    }

    res.status(200).json(sectionData);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// Create Sections

const createLogo = async (req, res) => {
  req.body.uniqueLogo = "nomAdz@unique"
  const sectionsData = req.body;

  try {
    // Insert the sections data into the database
    const createdSections = await Logo.create(sectionsData);
    res.json({
      message: "Sections created successfully",
      sections: createdSections,
    });
  } catch (error) {
    console.error("Error creating sections:", error);
    res.status(500).json({ message: "Failed to create sections" });
  }
};

module.exports = {
  updateLogo,
  getLogo,
  createLogo,
};
