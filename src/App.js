import { useState } from 'react';
import './index.css';
import Employee from './Components/employee';
import {v4 as uuidv4} from 'uuid';


function App() {
//let role='';

const [role,setRole]=useState('');
const [employees,setEmployees]=useState(
  [
    {name: "nader",
    role: "Engineer",
    img: "https://images.pexels.com/photos/906052/pexels-photo-906052.jpeg"
  }
    ,

{name: "Adam",
    role: "manager",
    img: "https://images.pexels.com/photos/1839564/pexels-photo-1839564.jpeg"

  },
{name: "Jomana",
    role: "Cordinator",
    img: "https://ix-marketing.imgix.net/focalpoint.png"}
  ,

  {name: "nader",
    role: "Engineer",
    img: "https://images.pexels.com/photos/906052/pexels-photo-906052.jpeg"
  }
    ,

{name: "Adam",
    role: "manager",
    img: "https://images.pexels.com/photos/1839564/pexels-photo-1839564.jpeg"

  },
{name: "Jomana",
    role: "Cordinator",
    img: "https://ix-marketing.imgix.net/focalpoint.png"}


  ]
);
return (
  <div className="App">
      <input type="text" onChange={(e)=>
        setRole(e.target.value)}></input>
       <div className="flex flex-wrap justify-center">
          
          {employees.map((employee)=>{
          console.log(employee);
          console.log(uuidv4());
          return (
            <Employee 
              key={uuidv4()}
              name={employee.name}
              role={employee.role} 
              img={employee.img}
              />
          )
           
})}
          
          
       </div>
    </div> 
  );
}

export default App;
