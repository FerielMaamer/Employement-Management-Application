import React from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from "./CRUD pages/Add";
import Update from "./CRUD pages/Update";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


export default function Employees(props) {
  const [data, setData] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchAllEmployees = async () => {
      try {
        const res = await axios.get(`api/emp/employees`);
        setData(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err); 
      }
    };
    fetchAllEmployees();
  }, []);

  

  const handleDelete = async (eid) => {
    try {
      await axios.delete(`/api/emp/employees/${eid}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
    <div className="px-3 mx-3">
      <Button className="float-right" onClick={props.handleLogout} variant="light">Logout</Button>
      
      <header >
      <h1 className="py-4 mb-4">Employees List</h1>
      <Button className="mb-4" variant="outline-dark">
        <Link
            to={`/add`}
            style={{ color: "inherit", textDecoration: "none" }}
          > 
            Add Employee
          </Link></Button>
        
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {data.length>0 && 
              data.map(info =>{
                return <tr key={info["_id"]}>
                  <td >{info["first_name"]}</td>
                  <td >{info["last_name"]}</td>
                  <td >{info["email"]}</td>
                  <td>
                    <Button variant="outline-dark"><Link
                      to={`/update/${info["_id"]}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                    > 
                      Update</Link>
                      </Button>{' '}
                    <Button variant="outline-dark" 
                    onClick={() => handleDelete(info["_id"])}>Delete</Button>{' '}
                    
                    <Button variant="outline-dark"><Link
                      to={`/view/${info["_id"]}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      View
                    </Link></Button>
                    
                  </td>
                  </tr>
                ;
              })
            }
            </tbody>
      </Table>
      </header>
    </div>
  );
}
