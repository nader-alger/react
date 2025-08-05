//import { useState } from 'react';
import './index.css';
//import Employee from './Components/employee';
//import {v4 as uuidv4} from 'uuid';
//import AddEmployee from './Components/AddEmployee';
//import EditEmployee from './Components/EditEmployee';
import Header from './Components/Header';
import Employees from './pages/Employees';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Customers from './pages/Customers';
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definition';
import IsNotFound from './Components/IsNotFound';


function App() {

return (
    
    <BrowserRouter>
    <Header>
      <Routes>
        <Route path="/employees" element={<Employees />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/dictionary" element={<Dictionary />} />
        <Route path="/404" element={<IsNotFound />} />
         <Route path="*" element={<IsNotFound />} />
        <Route
           path="/dictionary/:search" 
           element={<Definition />} />
      </Routes>
    </Header>
    </BrowserRouter> 


);
}

export default App;
