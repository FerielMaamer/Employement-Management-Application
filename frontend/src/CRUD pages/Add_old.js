import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Add() {
  /*const [employee, setEmployee] = React.useState({
            first_name:"",
            last_name:"",
            email:"",
            gender:"",
            salary:null
        });

    const [error,setError] = useState(false)

    const location = useLocation();
    const navigate = useNavigate();

    const eid = location.pathname.split("/")[2];

    const handleChange = (e) => {
        setEmployee((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();

        try {
        await axios.post(`/emp/employees/${eid}`, employee);
        navigate("/");
        } catch (err) {
        console.log(err);
        setError(true);
        }
    };*/
  return (
     <div className="form">
        add page
      {/*<h1>Add a New Employee</h1>
      <input
        type="text"
        placeholder="First Name"
        name="first_name"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Last Name"
        name="last_name"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Email Address"
        name="email"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Gender"
        name="gender"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Salary"
        name="salary"
        onChange={handleChange}
      />$
      <button onClick={handleClick}>Update</button>
      {error && "Something went wrong!"}
      <Link to="/">See all books</Link> */}
    </div>
  );
}

export default Add;