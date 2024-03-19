import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDoctorList } from "../context/DrListContext";

const DrList = () => {
  const [names, setNames] = useState([]);
  const [input, setInput] = useState("");
  const { updateDoctorList } = useDoctorList();

  const base_url = import.meta.env.VITE_BASE_URL

  const user = localStorage.getItem("userInfo");
  if (!user) {
    return null;
  }

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(`${base_url}/getdoctors`);
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
        const response = await axios.post(`${base_url}/adddoctor`, {
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
        await axios.delete(`${base_url}/deletedoc/${id}`);
        
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
          <h1 className="text-center text-2xl font-semibold">
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
            placeholder="Enter doctor's name"
          />
          <button
            type="button"
            onClick={handleClick}
            className="bg-green-500 px-4 py-2 text-white rounded-md"
          >
            Add
          </button>
        </div>
        <div className="max-w-xl mx-auto">
          
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {names.map((doctor) => (
                <tr key={doctor._id}>
                  <td className="border px-4 py-2">{doctor.name}</td>
                  <td className="border px-4 py-2 text-center">
                    <button
                      type="button"
                      onClick={() => handleDelete(doctor._id)}
                      className="bg-red-500 px-2 py-1 text-white rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DrList;
