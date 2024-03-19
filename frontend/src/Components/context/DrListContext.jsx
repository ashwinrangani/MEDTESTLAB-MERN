// DrListContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const DoctorListContext = createContext();

const base_url = import.meta.env.VITE_BASE_URL

export const useDoctorList = () => {
  return useContext(DoctorListContext);
};

export const DoctorListProvider = ({ children }) => {
  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(`${base_url}/getdoctors`);
        setDoctorList(response.data.doctors);
        console.log("Doctor's list fetched:", doctorList); // Log here
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []); // Run once on component mount

  const updateDoctorList = (newList) => {
    setDoctorList(newList);
  };

  return (
    <DoctorListContext.Provider value={{ doctorList, updateDoctorList }}>
      {children}
    </DoctorListContext.Provider>
  );
};
