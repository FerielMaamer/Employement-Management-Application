import React from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from "./CRUD pages/Add";
import Update from "./CRUD pages/Update";


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
  

  /* const handleLogout=()=>{
    localStorage.clear();
    window.location.reload();
    window.location.replace('/');
  } */

  return (
    <div>
      <button onClick={props.handleLogout}>Logout</button>
      <header >
      <h1>Employees List</h1>
      
        <button>
          <Link
            to={`/add`}
            style={{ color: "inherit", textDecoration: "none" }}
          > 
            Add
          </Link> </button>
         <table className="striped bordered hover" >
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
                    <button>
                       <Link
                      to={`/update/${info["_id"]}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                    > 
                      Update
                    </Link> </button>
                    
                    <button onClick={() => handleDelete(info["_id"])}>Delete</button>
                    <button>
                      <Link
                      to={`/view/${info["_id"]}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      View
                    </Link></button>
                  </td>
                  </tr>
                ;
              })
            }
            </tbody>
      </table>
      </header>
    </div>
  );
}
