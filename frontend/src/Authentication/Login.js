import {useRef, useState, useEffect} from 'react';
import { Link, useLocation, useNavigate, redirect } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
    
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({
        username:"",
        password:""
    });
    const [message, setMessage]= useState("");
    const [error,setError] = useState(false)
    const navigate = useNavigate();
    useEffect(()=>{
        
    },[])

    const handleClick = async (e) => {
        e.preventDefault();

        try {
        const res = await axios.post(`https://cryptic-atoll-26939.herokuapp.com/api/user/login`, user)
        console.log(res);
        setMessage(res.data["message"]);
        if (res.data.status){
            localStorage.setItem("user", JSON.stringify(user));
            setLoggedIn(true);
            navigate("/employees")
        }
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
        <h3 className="px-5 mx-5 mt-5">Login Page</h3>
        <Form onSubmit={handleClick} className="px-5 mx-5 mt-5">
            <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" 
                name="username" onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" 
                name="password" onChange={handleChange}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
            <p>{message}</p>
            <Link to="/register">Don't have an account?</Link>
        </Form>
        {/* <form onSubmit={handleClick}>
            <input
                type="text"
                placeholder="UserName"
                name="username"
                onChange={handleChange}
            />
            <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
            />
            <button type="submit">Login</button>            
        </form> */}
        
    </div>
  );
}

export default Login;
