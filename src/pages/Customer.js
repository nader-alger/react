import { Link, useParams,useNavigate } from "react-router-dom"
import { useEffect,useState } from "react";
import IsNotFound from "../Components/IsNotFound";
import { baseUrl } from "../shared";

export default function Customers() {
    const {id}=useParams();
    const [customer,setCustomer]=useState()
    const [notFound,setNotFound]=useState(false);

    const navigate=useNavigate()

    useEffect(()=>{
        console.log('useEffect')
        const URL=baseUrl + 'api/customers/' + id;
        fetch(URL)
        .then((response)=>{

        if (response.status === 404) {
            setNotFound(true)
            //navigate('/404')
        }

            return response.json()
        })
        .then((data)=>{
            setCustomer(data.Customer)
        })

    }
    ,[])

    if (notFound === true) {
                return (
                           <>
                                <IsNotFound />
                                <Link to="/dictionary">Search Again</Link>
                           </>
                    );
    } 


    return <>
          {customer ? <div>
                <p>{customer.id}</p>
                <p>{customer.name}</p>
                <p>{customer.industry}</p>
           </div>
        :null}
        <Link to="/Customers"> Go Back </Link>
        </>
    
}