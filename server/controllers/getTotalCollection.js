import { Patient } from "../models/patientModel.js";

const getTotalCollection = async (req, res) => {
  try {
    const totalCollection = await Patient.aggregate([
      { $group: { _id: null, total: { $sum: "$bill" } } }
    ]);
    
    if (totalCollection.length > 0) {
      res.status(200).json({ total: totalCollection[0].total });
    } else {
      res.status(404).json({ message: "No patients found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export default getTotalCollection;
