import { Patient } from "../models/patientModel.js";

const getBillByDoctor = async (req, res) => {
    
    try {
       const { doctor } = req.params;
       const { startDate, endDate } = req.query;

       console.log(doctor, startDate, endDate);

       const query = {
        refBy: doctor,
        date: { $gte: startDate, $lte: endDate } // Filter patients within the date range
    };
        
        const referredPatient = await Patient.find(query);
        
        if (referredPatient.length > 0) {
            // Calculate the total bill for today
            const billTotal = referredPatient.reduce((total, patient) => total + patient.bill, 0);

            res.status(200).json({ referBy: doctor, billTotal });
        } else {
            res.status(404).json({ message: 'No patients reffered by the selected doctor' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
export default getBillByDoctor;