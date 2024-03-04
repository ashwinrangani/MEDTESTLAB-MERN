import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDoctorList } from "../context/DrListContext";

const DrList = () => {
  const [names, setNames] = useState([]);
  const [input, setInput] = useState("");
  const { updateDoctorList } = useDoctorList();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:4000/getdoctors");
        setNames(response.data.doctors);
        updateDoctorList(response.data.doctors);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, [updateDoctorList]);

  const handleClick = async () => {
    if (input.trim() !== "") {
      try {
        const response = await axios.post("http://localhost:4000/adddoctor", {
          name: input,
        });
        console.log(response.data)

        setNames((prev) => [...prev, response.data.name]);
        setInput("");
      } catch (error) {
        console.error("Error adding doctor:", error);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm('Are you sure about this action?');
      
      if (confirmDelete) {
        await axios.delete(`http://localhost:4000/deletedoc/${id}`);
        
        const filteredNames = names.filter((doctor) => doctor._id !== id);
        setNames(filteredNames);
      }
    } catch (error) {
      console.error("Error deleting doctor:", error);
    }
  };
  

  return (
    <>
      <div className="bg-sky-100 md:ml-52 h-screen p-6">
        <div className="flex justify-center items-center h-12 w-full mb-6">
          <h1 className=" text-center text-2xl font-semibold">
            Doctor's List
          </h1>
        </div>
        <div className="flex gap-4 justify-center items-center mb-4">
          <input
            type="text"
            name="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="px-4 py-2 border rounded-md w-60"
          />
          <button
            type="button"
            onClick={handleClick}
            className="bg-green-500 px-4 py-2 text-white rounded-md"
          >
            Add
          </button>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Doctor's Names :</h2>
          <ul className="list-disc pl-6">
            {names.map((doctor, index) => (
              <div key={index} className="flex items-center mb-2">
                <li className="mr-2">{doctor.name}</li>
                <button
                  type="button"
                  onClick={() => handleDelete(doctor._id)}
                  className="inline-block bg-red-500 p-1 text-white rounded-md"
                >
                  Delete
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DrList;
