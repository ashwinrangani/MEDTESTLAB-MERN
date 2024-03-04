import { Doctor } from "../models/patientModel.js";

const deletetDoctor = async (req, res) => {
  try {
    const { _id } = req.params;
  
    const deleteDoc = await Doctor.findByIdAndDelete({ _id });  // Use _id for MongoDB
    console.log(deleteDoc)
    res.status(200).json({
      message: "Deletion successful",
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting doctor", error });
  }
};

export default deletetDoctor;
