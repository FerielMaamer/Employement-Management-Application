import {useRef, useState, useEffect} from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    /* const userRef = useRef();
    const errRef = useRef(); */

    const [user, setUser] = useState({
        username:"",
        password:""
    });
    const [error,setError] = useState(false)
    /* const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(''); */
    const navigate = useNavigate();
    useEffect(()=>{
        
    },[])

    const handleClick = async (e) => {
        e.preventDefault();

        try {
        await axios.put(`https://cryptic-atoll-26939.herokuapp.com/api/user/login`, user);
        navigate("/");
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
            <input
                type="text"
                placeholder="UserName"
                name="username"
                onChange={handleChange}
            />
            <textarea
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
            />
            <button type="submit">Login</button>            
        </form>
        {error && "Something went wrong!"}
        <Link to="/">See all employees</Link>
    </div>
  );
}

export default Login;
