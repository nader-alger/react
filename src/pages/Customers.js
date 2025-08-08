import { useEffect,useState } from "react"
import { useNavigate } from "react-router-dom";
import IsNotFound from "../Components/IsNotFound";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { baseUrl } from "../shared";


export default function Customers() {

const [customers,setCustomers]=useState();

const [error,setError]=useState(false);

const navigate=useNavigate();

const [notFound,setNotFound]=useState(false);

    useEffect(()=>{
        //console.log('Fetching ....')

    const URL=baseUrl + 'api/customers/';
    
fetch(URL)
      .then((response)=> {
       
/* 
        if (!response.ok) {
            console.log(response.status + ' Not OK')
            setNotFound(true)
        }
        
        if (response.ok) {
            console.log(response.status+ ' is OK')
        }

        if (response.status === 404) {
            setNotFound(true)
        } else if (response.status === 401) {
            navigate('/login')
        } else if (response.status === 501) {
            navigate('/login')
        }
        */
   

        return response.json()
    })
    
     .then((data)=>{
        console.log(data.Customers)
        setCustomers(data.Customers);
     })
    

    /* .catch((e)=>{
        setError(true);
     });
 */


    },[]);

       return (
        <> 
        
            {customers ?  
                    (  
                        <> 
                        <p> Here is the customers!</p>     
                        {customers.map((customer)=>{
                            return (
                                <p><Link to={"/customers/" + customer.id }> {customer.name} </Link></p>
                            );
                        })}
                        
                        </>
                    )
            :
              null
            }
                       
        </>
    );


}
        
