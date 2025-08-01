import { useState } from 'react';
import './index.css';
import Employee from './Components/employee';
import {v4 as uuidv4} from 'uuid';
import AddEmployee from './Components/AddEmployee';


function App() {
//let role='';

const [role,setRole]=useState('');
const [employees,setEmployees]=useState(
  [
    {
      id:1,
      name: "nader",
      role: "Engineer",
      img: "https://images.pexels.com/photos/906052/pexels-photo-906052.jpeg"
  }
    ,

{
    id:2,
    name: "Adam",
    role: "manager",
    img: "https://images.pexels.com/photos/1839564/pexels-photo-1839564.jpeg"

  },
{
    id:3,
    name: "Jomana",
    role: "Cordinator",
    img: "https://ix-marketing.imgix.net/focalpoint.png"}
  ,

  {
    id:4,
    name: "nader",
    role: "Engineer",
    img: "https://images.pexels.com/photos/906052/pexels-photo-906052.jpeg"
  }
    ,

{
    id:5,
    name: "Adam",
    role: "manager",
    img: "https://images.pexels.com/photos/1839564/pexels-photo-1839564.jpeg"

  },
{
    id:6, 
    name: "Jomana",
    role: "Cordinator",
    img: "https://ix-marketing.imgix.net/focalpoint.png"}

,
{
    id:7, 
    name: "Malak",
    role: "Programmer",
    img: "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg"}

  ]
);

function newEmployee(name,role,image) {
  const theNewEmployee={
    id:uuidv4(),
    name:name,
    role:role,
    img:image
  }
  setEmployees([...employees,theNewEmployee]);
}

function updateEmployee(id,newName,newRole) {
    //console.log('updateEmployee inside app.js');
    const updatedEmployees = employees.map((employee)=> {

    if (employee.id===id) 
        {
          return {...employee,name:newName,role:newRole};
          
        }
      
          return employee;
      
    });

    setEmployees(updatedEmployees);
}



return (
  <div className="App">
      <input type="text" onChange={(e)=>
        setRole(e.target.value)}></input>
       
       <div className="flex flex-wrap justify-center">
          {employees.map((employee)=>{
              //console.log(employee);
              //console.log(uuidv4());
              return (
                <Employee 
                //key={uuidv4()}
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role} 
                  img={employee.img}
                  updateEmployee={updateEmployee}

                  />
              )
         })}
       </div>
      
      <AddEmployee 
        newEmployee={newEmployee}
      />

    </div> 
  );
}

export default App;
