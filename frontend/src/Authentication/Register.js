import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate, redirect } from "react-router-dom";

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
        <form onSubmit={handleClick}>
              <h1>Enter your details Details</h1>
              <input
                type="text"
                placeholder="UserName"
                name="username"
                onChange={handleChange}
            />
            <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
            />
            <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
            />
            <button type="submit">Login</button>            
        </form>
        <p>{message}</p>
        {error && "Something went wrong!"}
        <Link to="/login">Already have an account?</Link>
    </div>
  );
}

export default Register;