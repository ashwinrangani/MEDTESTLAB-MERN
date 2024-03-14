import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Dropdown } from 'flowbite-react';
import { useDoctorList } from './../../context/DrListContext';

const BillingByDoctor = ({ input }) => {
  const [totalCollection, setTotalCollection] = useState(0); 
  const [doctor, setDoctor] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('')
  const { doctorList } = useDoctorList();

  const getBillByDoctor = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/billbydoctor/${doctor}?startDate=${startDate}&endDate=${endDate}`);
      const { billTotal, message } = response.data;
      const { patients } = response.data;
      
      console.log(patients);
      
      if (patients.length === 0) {
        setTotalCollection(0);
        if (message) {
          // Display the error message
          console.log(message)
        }
      } else {
        setTotalCollection(billTotal);
      }
    } catch (error) {
      console.error(error);
      
    }
  };
  
  
  useEffect(() => {
    getBillByDoctor();
  }, [input, startDate, endDate]);
  
  useEffect(() => {
    getBillByDoctor();
  }, [doctor]);
  

  const handleDoctorSelect = (doctorName) => {
    setDoctor(doctorName);    
  };
  const handleStartDate = (startdate) => {
    setStartDate(startdate);
  };
  const handleEndDate = (enddate) => {
    setEndDate(enddate);
  }

  return (
    <div className='flex items-center gap-2 ml-1 mt-2 font-semibold '>
      <Dropdown label="Doctor" size="sm">
        {doctorList &&
          doctorList.map((doctor) => (
            <Dropdown.Item key={doctor.id} onClick={() => handleDoctorSelect(doctor.name)}>
              {doctor.name}
            </Dropdown.Item>
          ))}
      </Dropdown>
      <div>
        Start Date: <input type="date" value={startDate} onChange={(e) => handleStartDate(e.target.value)} />
      </div>
      <div>
        End Date: <input type="date" value={endDate} onChange={(e) => handleEndDate(e.target.value)} />
      </div>
      <div>Doctor's Name: {doctor}</div>
      <div>Collection: {totalCollection}</div>
      
    </div>
  );
};

export default BillingByDoctor;
