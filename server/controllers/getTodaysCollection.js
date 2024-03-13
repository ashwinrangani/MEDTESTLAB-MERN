import { Patient } from "../models/patientModel.js";

const getTodaysCollection = async (req, res) => {
    
    try {
        const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;

          
       console.log(formattedDate)
        
        const todaysPatients = await Patient.find({ date: formattedDate});
        
        if (todaysPatients.length > 0) {
            // Calculate the total bill for today
            const todaysTotal = todaysPatients.reduce((total, patient) => total + patient.bill, 0);

            res.status(200).json({ date: today, todaysTotal });
        } else {
            res.status(404).json({ message: 'No patients with bill data for today' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
export default getTodaysCollection;