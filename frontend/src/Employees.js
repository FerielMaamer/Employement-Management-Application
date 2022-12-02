import React from "react";
import axios from 'axios';
import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from "./CRUD pages/Add";
import Update from "./CRUD pages/Update";


export default function Employees() {
  const [data, setData] = React.useState([]);
  const [updateBtnClicked, setUpdateBtnClicked] = React.useState(false);

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

  const handleUpdateBtn = () => {
    setUpdateBtnClicked(true);
    console.log(updateBtnClicked);
  }

  const handleDelete = async (eid) => {
    try {
      await axios.delete(`/api/emp/employees/${eid}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };
  //const location = useLocation();
  //console.log(location);

  return (
    <div>
      <header >
      <h1>Employees List</h1>
      
        
        <Add></Add>
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
                    {/*<button>
                       <Link
                      to={`/update/${info["_id"]}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                    > 
                      Update
                    </Link> </button>*/}
                    <button onClick={()=>handleUpdateBtn()}>
                      
                      Update</button>
                      {updateBtnClicked && 
                      <Update eid={info["_id"]}></Update>}
                    <button onClick={() => handleDelete(info["_id"])}>Delete</button>
                    {/* <button>
                      <Link
                      to={`/view/${info["_id"]}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      View
                    </Link></button> */}
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
