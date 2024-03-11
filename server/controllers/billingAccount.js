import { Patient } from "../models/patientModel.js";

const billingAccount = async (req, res) => {
    const { input } = req.body;
    const { serial } = req.params
    try {
        const patientwithBill = await Patient.findOneAndUpdate(
            { serial: serial },
            { $set: { bill: input } },
            )
        if(patientwithBill){
            res.status(200).json({ message : 'Update Success'})
        }

    } catch (error) {
        res.status(401).json({error : 'Update failed'})
    }
}

export default billingAccount;