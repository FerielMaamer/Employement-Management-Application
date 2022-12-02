import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Update(props) {
   const [employee, setEmployee] = React.useState({
            first_name:"",
            last_name:"",
            email:"",
            gender:"",
            salary:null
        }); 

    const [error,setError] = useState(false)
    //const { createMemoryHistory } = require("history");
    //const history = createMemoryHistory();
    //const location = useLocation();
    //const navigate = useNavigate();

    //const navigate = history;
    
    //const eid = window.location.href;
    console.log("eid");
    console.log(props.eid);

    const handleChange = (e) => {
        setEmployee((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();

        try {
        await axios.put(`api/emp/employees/${props.eid}`, employee);
       //navigate("/");
        } catch (err) {
        console.log(err);
        setError(true);
        }
    };
  return (
    <div className="form">
        update page
      <h1>Update the Employee Details</h1>
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
      <button onClick={handleClick}>Update</button>
      {error && "Something went wrong!"}
      {/* <Link to="/">See all books</Link> */}
    </div>
  );
}

export default Update;