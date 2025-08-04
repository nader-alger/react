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
import Dictionary from './Components/Dictionary';

function App() {

return (
    
    <BrowserRouter>
    <Header>
      <Routes>
        <Route path="/employees" element={<Employees />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/dictionary" element={<Dictionary />} />
      </Routes>
    </Header>
    </BrowserRouter> 


);
}

export default App;
