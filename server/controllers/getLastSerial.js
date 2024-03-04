import { Patient } from "../models/patientModel.js";

const getLastSerial = async (req, res) => {
    try {
        const patient = await Patient.findOne({}).sort({ serial: -1 });

        if (!patient) {
            return res.status(404).json({ error: "No patient found" });
        }

        const { serial } = patient;
        res.status(200).json({ serial });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to get the latest patient' });
    }
}

export default getLastSerial;
