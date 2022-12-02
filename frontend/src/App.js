import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employees from './Employees';
import Add from './CRUD pages/Add';
import Update from './CRUD pages/Update';
import View from './CRUD pages/View';
import NoPage from './NoPage';

function App() {
  return (
    <div>
    <Employees></Employees>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Employees />} exact>
          <Route path="/add" element={<Add />}/>
          <Route path="/update/:id" element={<Update />} />
          <Route path="/view/:id" element={<View />} />
           <Route path="*" element={<NoPage />} /> 
        </Route>
      </Routes>
    </BrowserRouter> */}
    </div>
  );
}

export default App;
