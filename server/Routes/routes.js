import express from 'express';
import AddPatient from '../controllers/AddPatient.js';
import Login from '../controllers/Login.js';
import AddDoctor from '../controllers/AddDoctor.js';
import getDoctors from '../controllers/getAllDoctors.js';
import deletetDoctor from '../controllers/DeleteDoctor.js';
import getLastPatient from '../controllers/getLastPatient.js';
import getLastSerial from '../controllers/getLastSerial.js';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  router.get('/getlastpatient/:serial', getLastPatient)
  router.get('/getlastserial', getLastSerial)
  router.post('/addpatient', AddPatient);
  router.post('/login', Login);
  router.post('/adddoctor', AddDoctor);
  router.get('/getdoctors', getDoctors);
  router.delete('/deletedoc/:_id', deletetDoctor);

export default router;