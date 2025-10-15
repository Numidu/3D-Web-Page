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
    <div>
      <RetrieveData rel={relod} />
      <input
        type="text"
        placeholder="ID"
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleSubmit}>Add User</button>
    </div>
  );
}
export default DataSet;
