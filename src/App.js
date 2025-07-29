import { useState } from 'react';
import './App.css';
import Employee from './Components/employee';



function App() {
//let role='';

const [role,setRole]=useState('');

return (
    <div className="App">
      <input type="text" onChange={(e)=>
        setRole(e.target.value)}></input>
       <Employee name="Nader" role={role} />  
       <Employee name="Adam" role="Programmer" /> 
       <Employee name="Jomana" />
    </div>
  );
}

export default App;
