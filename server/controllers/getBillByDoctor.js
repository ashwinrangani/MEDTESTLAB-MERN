import { Patient } from "../models/patientModel.js";

const getBillByDoctor = async (req, res) => {
    
    try {
       const { doctor } = req.params;
       const { startDate, endDate } = req.query;

       console.log(doctor, startDate, endDate);

       const query = {
        refBy: doctor,
        date: { $gte: startDate, $lte: endDate } 
    };
        
        const referredPatient = await Patient.find(query);
        
        if (referredPatient.length > 0) {
            
            const billTotal = referredPatient.reduce((total, patient) => total + patient.bill, 0);

            res.status(200).json({ patients: referredPatient, doctor, billTotal });
        } else {
            res.status(200).json({ patients: [], doctor, billTotal: 0 });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
export default getBillByDoctor;