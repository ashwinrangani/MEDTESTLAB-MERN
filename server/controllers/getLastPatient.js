import { Patient } from "../models/patientModel.js";

const getLastPatient = async (req, res) => {
  const { serial } = req.params;
  try {
    const patient = await Patient.findOne({ serial: serial })
    if (!patient) {
      return res.status(404).json({ error: "Patient not found" });
    }

    res.status(200).json({ patient });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get the patient data" });
  }
};
export default getLastPatient;
