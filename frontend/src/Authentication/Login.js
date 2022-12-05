import {useRef, useState, useEffect} from 'react';
import { Link, useLocation, useNavigate, redirect } from "react-router-dom";
import axios from "axios";

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
        {isLoggedIn  }
        <form onSubmit={handleClick}>
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
        </form>
        <p>{message}</p>
        <Link to="/register">Don't have an account?</Link>
    </div>
  );
}

export default Login;
