import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Update(props) {
   const [employee, setEmployee] = React.useState({
            first_name:"",
            last_name:"",
            email:"",
            gender:"",
            salary:null
        }); 

    const [error,setError] = useState(false)
    const navigate = useNavigate();
    
    const location = useLocation();
    const eid = location.pathname.split("/")[2];

    const handleChange = (e) => {
        setEmployee((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();

        try {
        await axios.put(`https://cryptic-atoll-26939.herokuapp.com/api/emp/employees/${eid}`, employee);
        } catch (err) {
        console.log(err);
        setError(true);
        }
        if (error){navigate("/employees");}
    };
  return (
    <div >
      <Button className="float-right" onClick={props.handleLogout} variant="light">Logout</Button>
      <h3 className="px-5 mx-5 mt-3">Update Employee Details</h3>
        <Form onSubmit={handleClick} className="px-5 mx-5 my-5">
            <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" 
                name="first_name" onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLast Name">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" 
                name="last_name" onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Email Address" 
                name="email" onChange={handleChange}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Gender</Form.Label>
              <Form.Select name="gender" onChange={handleChange} aria-label="Default select example">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSalary">
                <Form.Label>Salary</Form.Label>
                <Form.Control type="text"  
                name="salary" onChange={handleChange}/>
            </Form.Group>
            <div>
            <Button variant="primary" type="submit">
                Update
            </Button>
            </div>
            {error && "Something went wrong!"}
            <Link to="/employees">See all employees</Link> 
        </Form>  
      
    </div>
    
  );
}

export default Update;