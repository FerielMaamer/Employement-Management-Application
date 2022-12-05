import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate, redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Register() {
  const [user, setUser] = useState({
        username:"",
        email:"",
        password:""
    });
    const [message, setMessage]= useState("");
    const [error,setError] = useState(false)
    const navigate = useNavigate();
    

    const handleClick = async (e) => {
        e.preventDefault();

        try {
        await axios.post(`https://cryptic-atoll-26939.herokuapp.com/api/user/signup`, user)
        .then((response) => {
            localStorage.setItem("user", JSON.stringify(response.data));
            console.log(response);
            return response.data;
            });
        setMessage('successfully added');
        navigate("/employees");
        } catch (err) {
        console.log(err);
        setError(true);
        }
    };

    const handleChange = (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

  return (
    <div>
        <h3 className="px-5 mx-5 mt-5">Sign up Page</h3>
        <Form onSubmit={handleClick} className="px-5 mx-5 mt-5">
            <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" 
                name="username" onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Email Address" 
                name="email" onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" 
                name="password" onChange={handleChange}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Sign Up
            </Button>
            <p>{message}</p>
            <Link to="/">Already have an account?</Link>
        </Form>         
    </div>
  );
}

export default Register;