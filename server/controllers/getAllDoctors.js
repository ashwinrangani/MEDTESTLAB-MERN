import { Doctor } from "../models/patientModel.js";

const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json({
      message: "List of doctors retrieved",
      success: true,
      doctors: doctors,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving doctors", error });
  }
};

export default getDoctors;
