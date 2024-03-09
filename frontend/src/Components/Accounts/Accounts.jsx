import React, { useEffect, useState } from 'react';
import Paginate from './Pagination';
import axios from 'axios';
import { Button } from 'flowbite-react';
import { MdUpdate } from "react-icons/md";

const Accounts = () => {
  const [patientData, setPatientData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getPatients = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/patients?page=${currentPage}&limit=2`);
        const { patients } = response.data;
        setPatientData(patients);
        console.log(patients);
      } catch (error) {
        console.error(error);
      }
    };

    getPatients();
  }, [currentPage]);

  const onPageChange = (page) => setCurrentPage(page);
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };
  return (
    <div className='md:ml-52 bg-gray-200 h-screen'>
      <h1 className='text-center text-2xl font-display'>Accounts</h1>
      <div className='mt-10 ml-2 mr-2 overflow-x-auto flex justify-center items-center'>
        {patientData && (
          <table className='table-auto md:table-fixed lg:table-fixed border-slate-400 md:w-[78%]'>
            <thead>
              <tr className='bg-slate-200'>
                <th className='border border-slate-800 w-[5%]'>Sr.</th>
                <th className='border border-slate-800 w-[40%]'>Patient's Name</th>
                <th className='border border-slate-800 w-[10%]'>Report Date</th>
                <th className='border border-slate-800 w-[15%]'>Bill Amount</th>
                <th className='border border-slate-800 w-[9%]'>Update</th>
              </tr>
            </thead>
            <tbody>
              {patientData.map((patient, index) => (
                <tr key={patient.id}>
                  <td className='border text-center border-slate-300 w-[5%] md:overflow-visible text-sm'>
                    {patient.serial}
                  </td>
                  <td className='border pl-1 md:pl-20 border-slate-300 w-[40%] md:overflow-visible'>
                    {patient.name}
                  </td>
                  <td className='border text-xs md:text-sm  text-center border-slate-300 w-[10%] md:overflow-visible'>
                    {formatDate(patient.date)}
                  </td>
                  <td className='border border-slate-200 md:w-[15%] '>
                    <input
                      type='text'
                      className='text-center bg-gray-100 text-sm w-full'
                    />
                  </td>
                  <td className='w-[8%]'>
                    <Button className=' h-8 text-sm p-0 w-24 rounded  text-white'>
                      Update <MdUpdate className="ml-2  h-5 w-5"/>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className='md:mt-4'>
        <Paginate currentPage={currentPage} onPageChange={onPageChange} />
      </div>
    </div>
  );
};

export default Accounts;
