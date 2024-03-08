import React, { useEffect, useState } from "react";
import { useForm, } from "react-hook-form";
import { useDoctorList } from "../context/DrListContext";
import CbcReport from "./Reports/CbcReport";
import UrineReport from "./Reports/UrineReport";
import { Button, Dropdown } from "flowbite-react";
import { FaUserPlus } from "react-icons/fa6";
import { MdClear } from "react-icons/md";
import { MdOutlineNewLabel } from "react-icons/md";
import { GrPrevious } from "react-icons/gr";
import axios from "axios";
import CbcPDF from "./Reports/CbcPDF";



const PatientInfo = () => {
  const [visibleForm, setVisibleForm] = useState('');
  const [index, setIndex] = useState(null);
   const [serial, setSerial] = useState(null);
   const[patientData, setPatientData]= useState({})
   
  
  const user = localStorage.getItem("userInfo");
  if (!user) {
    return null;
  }
  // getting last entry's serial
  useEffect(() => {
    const fetchLastPatient = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/getlastserial`);
        console.log('Last patient response:', response.data);
        const { serial } = response.data;
  
        if (serial) {
          setSerial(serial)
          setIndex(serial);
          newPatient() //this will increment the serial on first mount
        } else {
          setIndex(1);
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchLastPatient();
  }, []);
  

  const newPatient = () => {
    if (serial) {
      const newSerial = serial + 1;
      setIndex(newSerial);
      reset(); 
    } else {
      console.error('Patient data not available.');
    }
  };
  
 

  const { doctorList } = useDoctorList();

  const {register, handleSubmit, reset, watch,getValues, setValue, formState: { errors },  } = useForm();

  //getting data based on serial numbers, previous button function
  const fetchPatientData = async(serial) => {
    try {
      const response = await axios.get(`http://localhost:4000/getlastpatient/${serial}`)
      const { patient } = response.data;
      setPatientData(patient)
      const fotmatteDate = new Date(patient.date).toISOString().split('T')[0];
      setValue('date', fotmatteDate)

     Object.keys(patient).forEach((key) => {
      if (key!=='date' && key!=='tests'){
        setValue(key, patient[key]);
      }
      
    });
    if (patient.tests && patient.tests.length > 0) {
      const cbcTestData = patient.tests.find((test) => test.testType === "CBC")?.testData;
      const urineTestData = patient.tests.find((test) => test.testType === "Urine")?.testData;

      if (cbcTestData) {
        Object.keys(cbcTestData).forEach((key) => {
          setValue(key, cbcTestData[key]);
        });
      }

      if (urineTestData) {
        Object.keys(urineTestData).forEach((key) => {
          setValue(key, urineTestData[key]);
        });
      } 
     
    }
  } catch (error) {
    console.error(error);
  }
};
  
const handleBack = () => {
  const prevSerial = (Number(index) - 1);
  if (prevSerial > 0) {
    fetchPatientData(prevSerial);
    setIndex(prevSerial);
  }
};
 

// submitting a patient to db
  const onSubmit = async (data) => {
   
   const payload = {
    patientData: {
      serial: index, name: data.name, age: data.age,  gender: data.gender, address: data.address,
      contact: data.contact, date: data.date, time: data.time, refBy: data.refBy,
        },
    tests: [
      {
        testType: "CBC", 
        testData: {
          Hb: data.Hb, HbNv: data.HbNv, RBC: data.RBC, RBCnv: data.RbcNv, WBC: data.WBC, WBCnv: data.WbcNv,
          neutrophils: data.neutrophils, NeutroNv: data.NeutroNv, lymphocytes: data.lymphocytes,
            Lymphonv: data.LymphoNv,eosinophils: data.eosinophils, EosNv: data.EosNv, monocytes: data.monocytes,
            MonoNv: data.MonoNv, basophils: data.basophils, BasoNv: data.BasoNv, pcv: data.pcv, PcvNv: data.PcvNv,
            mcv: data.mcv, McvNv: data.McvNv, mch:data.mch, MchNv: data.MchNv, mchc: data.mchc, MchcNv: data.MchcNv,
            rdw: data.rdw, RdwNv: data.RdwNv, platelets: data.platelets, PlatNv: data.PlatNv, mp: data.mp,
            serology: data.serology, SeroNv: data.SeroNv
          
        },
      },
      {
        testType: "Urine", 
        testData: {
          quantity: data.quantity, urineColor: data.urineColor, clarity: data.clarity, urineph: data.urineph,
          phNv: data.phNv, spgr: data.spgr, spgrNv: data.spgrNv, albumin: data.albumin, sugar: data.sugar,
          bilesalts: data.bilesalts, bilepigments: data.bilepigments, urobilinogen: data.urobilinogen, 
          urineblood: data.urineblood, acetone: data.acetone, leucocytes: data.leucocytes, nitrite: data.nitrite,
          puscells: data.puscells, redcells: data.redcells, epithelialcells: data.epithelialcells, casts: data.casts,
          crystals: data.crystals, amorphous: data.amorphous, bacteria: data.bacteria
        },
      },
      // Add more tests
    ],
  };
   
    try {
      const response = await axios.post('http://localhost:4000/addpatient', payload);
  
      const { error, message, patient } = response.data;
      if(error){
        window.alert('Patient already exists')
      }
      console.log(error)
      console.log(patient);
      setIndex(patient.serial)
        setSerial(patient.serial);
        setPatientData(patient); 
    } catch (error) {
      console.error(error);
    } 
  };
  

  const showForm = (formType) => {
    setVisibleForm(formType);
  };



 
  return (
    <div className={`md:ml-44 ${visibleForm ? 'h-full' : 'h-screen'} bg-sky-100`}>
      <h1 className="text-2xl pt-2 text-center font-display">
        Patient Information
      </h1>
      <div className="md:ml-16 sm:ml-2 mt-4">
        <form onSubmit={handleSubmit(onSubmit)}>
       {/* <GetLastPatient onLastSerialFetched={handleLastSerialFetched} /> */}
          <input
            className="w-20 px-2 py-1 ml-1 border rounded-md bg-gray-50"
            type="number"
            placeholder="Sr. No."
            value={index} readOnly
            {...register("serial")}
          />
          <input
            className=" w-80 px-2 py-1 ml-1 border rounded-md bg-gray-50"
            type="text"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          <input
            className="w-24 px-2 py-1 ml-1 border rounded-md bg-gray-50"
            type="number"
            placeholder="Age"
            {...register("age", { required: true })}
          />
          <select
            className="w-32 px-2 py-1 mt-1 ml-1  border rounded-md bg-gray-50"
            {...register("gender", { required: true })}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            className="w-64 px-2 py-1 ml-1 mt-1 border rounded-md bg-gray-50"
            type="text"
            placeholder="Address"
            {...register("address", { required: true })}
          />
          <input
            className="w-48 px-2 py-1 ml-1 border rounded-md bg-gray-50"
            type="text"
            placeholder="Mobile number"
            {...register("contact", { required: true })}
          />

          <select
            className="w-54 px-2 py-1 mt-1 ml-1 border rounded-md bg-gray-50"
            {...register("refBy")}
            
          >
            <option value="" disabled selected>Select a doctor</option>
            {doctorList.map((doctor) => (
              <option key={doctor._id} value={doctor.name}>
                {doctor.name}
              </option>
            ))}
          </select>
          <input
            className="px-2 w-36 py-1 ml-1 mt-1 border rounded-md bg-gray-50"
            type="date"
            placeholder="Date"
            {...register("date", {})}
          />
          <input
            className="w-40 px-2 py-1 ml-1 mt-1 border rounded-md bg-gray-50"
            type="time"
            placeholder="Time"
            {...register("time", {})}
          />

          <div className="flex flex-col mt-6 md:border-t-4 border-red-400 pt-4 md:flex-row md:mr-10 lg:mr-10">
            {/* Buttons for smaller devices (hidden on larger devices) */}
            <div className="w-full flex gap-1 md:hidden lg:hidden">
              <Dropdown label="Select Test">
                <Dropdown.Item onClick={() => showForm("cbc")}>
                  Blood Test
                </Dropdown.Item>
                <Dropdown.Item onClick={() => showForm("urine")}>
                  Urine Test
                </Dropdown.Item>
              </Dropdown>
            </div>
            <div className="w-full md:w-[90%] lg:w-[90%] pr-4">
              <div className="flex flex-col w-full">
                {visibleForm === "cbc" && <CbcReport register={register}  />}
                {visibleForm === "urine" && <UrineReport register={register} />}
              </div>
              
            </div>

            {/* Buttons to toggle between forms on larger devices */}
            <div className="w-full md:w-[10%] lg:w-[10%]">
              <div className="hidden md:flex lg:flex flex-col-2 gap-2 items-end mr-0">
                <Button 
                  gradientMonochrome="info"
                  className="mb-2 h-14 w-14"
                  onClick={() => showForm("cbc")}
                >
                  Blood Test
                </Button>
                <Button
                  gradientMonochrome="info"
                  className="mb-2 h-14 w-14"
                  onClick={() => showForm("urine")}
                >
                  Urine Test
                </Button>
              </div>
            </div>
            <div className="container fixed bottom-1 md:-ml-12  w-full  flex justify-center items-center">
      <Button.Group>
            <Button color="gray" 
            type="button"
            onClick={handleBack}
            > <GrPrevious className="mr-1 mt-0.5 h-3 w-3"/>
            Pre </Button>
            <Button color="gray"
              type="submit"
              ><FaUserPlus className="mr-2 h-4 w-4"/>Add
              </Button>
              <Button color="gray"
              type="button"
              onClick={()=>reset()}><MdClear className="mr-2 mt-0.5 h-4 w-4"/>
              Clear
            </Button>
            <Button color="gray"
              type="button" 
              onClick={newPatient}
             ><MdOutlineNewLabel className="mr-2 mt-0.5 h-4 w-4"/>
             New
            </Button>
                   
            <CbcPDF  patient={patientData} />
            </Button.Group>
          </div>
          </div>
          
       </form>
       
      </div>
      
    </div>
  );
};

export default PatientInfo;
