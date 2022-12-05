import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
    <div>
      <Button className="mb-5" onClick={props.handleLogout} variant="light">Logout</Button>
      <Card style={{ width: '18rem' }} className="text-center">
      <Card.Body>
        <Card.Title className="mb-4 center" >Employee Details</Card.Title>
        <Card.Text>
            <p><b>First Name: </b>{data["first_name"]}</p>
            <p><b>Last Name: </b>{data["last_name"]}</p>
            <p><b>Email Address: </b>{data["email"]}</p>
            <p><b>Gender: </b>{data["gender"]}</p>
            <p><b>Salary: </b>{data["salary"]}</p>
        </Card.Text>
      </Card.Body>
    </Card>
      {error && "Something went wrong!"}
      <Link to="/employees">See all employees</Link>
    </div>
  );
}

export default View;