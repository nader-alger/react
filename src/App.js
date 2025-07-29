import { useState } from 'react';
import './index.css';
import Employee from './Components/employee';



function App() {
//let role='';

const [role,setRole]=useState('');

return (
    <div className="App bg-red-300">
      <input type="text" onChange={(e)=>
        setRole(e.target.value)}></input>
       <Employee name="Nader" role={role} />  
       <Employee name="Adam" role="Programmer" /> 
       <Employee name="Jomana" />
    </div>
  );
}

export default App;
