import { Patient } from "../models/patientModel.js";

const getPatientPages = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  try {
    const patients = await Patient.find()
      .skip((page - 1) * limit)
      .limit(parseInt(limit))
      .sort({ serial: "asc" });

    if (!patients || patients.length === 0) {
      return res.status(404).json({ error: "No Patients Found" });
    }
    res.status(200).json({ patients });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get the patients data" });
  }
};

export default getPatientPages;
