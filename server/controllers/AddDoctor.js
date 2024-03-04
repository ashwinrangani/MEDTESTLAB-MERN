import { Doctor } from "../models/patientModel.js";

const AddDoctor = async (req, res) => {
  try {
    const { name } = req.body;

    const doctor = new Doctor({ name }); 
    
    await doctor.save();

    res.status(201).json({
        message: "Doctor added",
        success: true,
        name: doctor,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding doctor", error });
  }
};

export default AddDoctor;