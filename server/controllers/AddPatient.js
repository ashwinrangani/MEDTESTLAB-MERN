import { Patient } from '../models/patientModel.js';

const AddPatient = async (req, res) => {
    try {
        const { patientData, tests } = req.body;

        // Create a new patient document
        const newPatient = new Patient({
            ...patientData,
            tests: tests.map(test => ({
                testType: test.testType,
                testData: test.testData
            }))
        });

        // Save the patient document
        const savedPatient = await newPatient.save();

        res.status(201).json({ message: 'Patient and test data saved successfully!', patient: savedPatient });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to save patient and test data' });
    }
}

export default AddPatient;
