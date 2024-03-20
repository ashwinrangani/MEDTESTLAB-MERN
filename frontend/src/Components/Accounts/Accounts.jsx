import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Paginate from './Pagination';
import axios from 'axios';
import {  Button } from 'flowbite-react';
import { MdUpdate } from "react-icons/md";
import TodaysCollection from './Collection/TodaysCollection';
import TotalCollection from './Collection/TotalCollection';
import BillingByDoctor from './Collection/BillingByDoctor';

const Accounts = () => {
  const [patientData, setPatientData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [input, setInput] = useState([])
  const base_url = import.meta.env.VITE_BASE_URL

  const user = localStorage.getItem("userInfo");
  if (!user) {
    return null;
  }

  useEffect(() => {
    const getPatients = async () => {
      try {
        const response = await axios.get(`${base_url}/patients?page=${currentPage}&limit=10`);
        const { patients } = response.data;
        setPatientData(patients);
        const initialInputValue = patients.map((patient) => patient.bill !== null? patient.bill : '')
        setInput(initialInputValue)
        
      } catch (error) {
        console.error(error);
      }
    };

    getPatients();
  }, [currentPage]);

  const updatePatient = async (serial, updatedValue, index) => {
    
    try {
      const response = await axios.put(`${base_url}/billupdate/${serial}`, { input: updatedValue });
      const { message } = response.data;
      console.log(message);
     toast.success(message)
      // Update the local state with the new value
      const updatedInput = [...input];
      updatedInput[index] = updatedValue;
      setInput(updatedInput);
    } catch (error) {
      console.error(error);
    }
  };

  const onPageChange = (page) => setCurrentPage(page);
   
    
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };
const handleInputChange = (index, value) => {
const newInputValues = [...input];
newInputValues[index] = value;
setInput(newInputValues)
}

  return (
    <div className='md:ml-52 bg-sky-100 h-full'>
      <h1 className='text-center text-2xl font-display md:pt-2'>Accounts</h1>
      <div className=' ml-2 mr-2 overflow-x-auto flex justify-center items-center'>
        {patientData && (
          <table className='md:mt-4 table-auto md:table-fixed lg:table-fixed border-slate-400 md:w-[78%]'>
            <thead>
              <tr className='bg-slate-200'>
                <th className='border border-slate-800 w-[5%]'>Sr.</th>
                <th className='border border-slate-800 w-[40%]'>Patient's Name</th>
                <th className='border border-slate-800 w-[10%]'>Report Date</th>
                <th className='border border-slate-800 w-[15%]'>Bill Amount</th>
                <th className='border border-slate-800 w-[9%]'>Action</th>
              </tr>
            </thead>
            <tbody>
              {patientData.map((patient, index) => (
                <tr key={index}>
                  <td className='border text-center border-slate-300 w-[5%] md:overflow-visible text-sm'>
                    {patient.serial}
                  </td>
                  <td className='border pl-1 md:pl-20 border-slate-300 w-[40%] md:overflow-visible'>
                    {patient.name} <span className='ml-2 text-gray-500'>
    {patient.tests.map((test, index) => (
      <React.Fragment key={test._id}>
        {index > 0 && ' '}
        {test.testData && (
          <span>{test.testType}</span>
        )}
      </React.Fragment>
    ))}
  </span>
                  </td>
                  <td className='border text-xs md:text-sm  text-center border-slate-300 w-[10%] md:overflow-visible'>
                    {formatDate(patient.date)}
                  </td>
                  <td className='border border-slate-200 md:w-[15%] '>
                    <input
                      type='text'
                      value={input[index]} onChange={(e) => handleInputChange(index, e.target.value)}
                      
                      className='text-center bg-gray-100 text-sm w-full'
                    />
                  </td>
                  <td className='w-[8%]'>
                    <Button onClick={() => updatePatient(patient.serial, input[index], index)} 
                    className=' h-8 text-sm p-0 w-24 rounded  text-white'>
                      Update <MdUpdate className="ml-2  h-5 w-5"/>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      
        <Paginate currentPage={currentPage} onPageChange={onPageChange} />
        
          <TodaysCollection input={input} />
          <TotalCollection input={input}/>
          <BillingByDoctor input={input}/>
        
        
      <Toaster position="top-right" />
    </div>
  );
};

export default Accounts;
