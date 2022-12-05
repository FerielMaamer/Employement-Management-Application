import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Add(props) {
  const [employee, setEmployee] = React.useState({
            first_name:"",
            last_name:"",
            email:"",
            gender:"",
            salary:null
        });

    const [error,setError] = useState(false)
    const navigate = useNavigate();

    const handleChange = (e) => {
        setEmployee((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();

        try {
        await axios.post(`api/emp/employees`, employee);
        navigate("/");
        } catch (err) {
        console.log(err);
        setError(true);
        }
    };
  return (
     <div className="form">
      <button onClick={props.handleLogout}>Logout</button>
      <h1>Add a New Employee</h1>
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
        type="email"
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
      <button onClick={handleClick}>Add</button>
      {error && "Something went wrong!"}
      <Link to="/employees">See all employees</Link> 
    </div>
  );
}

export default Add;