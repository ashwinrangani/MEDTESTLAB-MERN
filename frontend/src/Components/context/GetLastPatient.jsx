import { useEffect } from "react";
import axios from "axios";

const GetLastPatient = ({ onLastSerialFetched }) => {
  useEffect(() => {
    const fetchLastPatient = async () => {
      try {
        const response = await axios.get("http://localhost:4000/getlastpatient");
        const { lastPatient } = response.data;

        if (lastPatient) {
          const updatedSerial = lastPatient.serial;
          onLastSerialFetched(updatedSerial);
        } else {
          console.log("No patients found.");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchLastPatient();
  }, [onLastSerialFetched]);

  return null;
};

export default GetLastPatient;
