import React, { useState, useEffect } from "react";
import axios from "axios";
import userModel from "./Model/userModel";
import RetrieveData from "./retriveData";

function DataSet() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [relod, setReioad] = useState(false);

  const handleSubmit = () => {
    const user = new userModel(id, name, address);
    axios
      .post("http://localhost:8081/api/user/saveuser", user)
      .then((res) => {
        alert("Data Added Successfully");
        setReioad(!relod);
      })
      .catch((err) => {
        alert("Error in adding data");
      });
  };

  useEffect(() => {
    handleSubmit();
  }, []); // ✅ array is inside useEffect()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      {/* Retrieve Data Section */}
      <div className="w-full max-w-2xl mb-6">
        <RetrieveData rel={relod} />
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-indigo-600 mb-6">
          ➕ Add New User
        </h2>

        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Enter ID"
            onChange={(e) => setId(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />

          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />

          <input
            type="text"
            placeholder="Enter Address"
            onChange={(e) => setAddress(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />

          <button
            onClick={handleSubmit}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg py-2 transition duration-200"
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
}
export default DataSet;
