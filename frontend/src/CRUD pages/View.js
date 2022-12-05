import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function View(props) {
   const [data, setData] = React.useState([]);

    const [error,setError] = useState(false)
    
    
    const location = useLocation();
    const eid = location.pathname.split("/")[2];
    console.log("eid");
    console.log(eid);

    
  React.useEffect(()=> {
    const fetchEmployee = async (e) => {
        try {
        const res = await axios.get(`https://cryptic-atoll-26939.herokuapp.com/api/emp/employees/${eid}`);
        setData(res.data);
        console.log(data);
        } catch (err) {
        console.log(err);
        setError(true);
        }
    };
    fetchEmployee();
  },[data]);
    
  return (
    <div className="form">
      <button onClick={props.handleLogout}>Logout</button>
        View page
     
      <div>
        <p><b>First Name: </b>{data["first_name"]}</p>
        <p><b>Last Name: </b>{data["last_name"]}</p>
        <p><b>Email Address: </b>{data["email"]}</p>
        <p><b>Salary: </b>{data["salary"]}</p>
      </div>
      
      
      {error && "Something went wrong!"}
      <Link to="/employees">See all employees</Link>
    </div>
  );
}

export default View;