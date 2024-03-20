import express from 'express';
import AddPatient from '../controllers/AddPatient.js';
import Login from '../controllers/Login.js';
import AddDoctor from '../controllers/AddDoctor.js';
import getDoctors from '../controllers/getAllDoctors.js';
import deletetDoctor from '../controllers/DeleteDoctor.js';
import getLastPatient from '../controllers/getLastPatient.js';
import getLastSerial from '../controllers/getLastSerial.js';
import getPatientPages from '../controllers/getPatientPages.js';
import billingAccount from '../controllers/billingAccount.js';
import getTodaysCollection from '../controllers/getTodaysCollection.js';
import getTotalCollection from '../controllers/getTotalCollection.js';
import getBillByDoctor from '../controllers/getBillByDoctor.js';

const router = express.Router();

  
  router.get('/getlastpatient/:serial', getLastPatient)
  router.get('/getlastserial', getLastSerial)
  router.get('/patients', getPatientPages)
  router.post('/addpatient', AddPatient);
  router.post('/login', Login);
  router.post('/adddoctor', AddDoctor);
  router.get('/getdoctors', getDoctors);
  router.delete('/deletedoc/:_id', deletetDoctor);
  router.put('/billupdate/:serial', billingAccount);
  router.get('/todays-collection', getTodaysCollection);
  router.get('/total-collection', getTotalCollection);
  router.get('/billbydoctor/:doctor', getBillByDoctor);

export default router;