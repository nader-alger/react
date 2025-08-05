import {useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import IsNotFound from "../Components/IsNotFound";
import { Link } from "react-router-dom";
import DefinitionSearch from "../Components/DefinitionSearch";
//import { Link } from "react-router";

export default function Definition() {

const [word,setWord]=useState();
const [notFound,setNotFound]=useState(false);
const [error,setError]=useState(false);

const navigate=useNavigate();

console.log(useParams());

let {search} = useParams();

useEffect(()=>{
    const URL='https://api.dictionaryapi.dev/api/v2/entries/en/'+ search;
    const URL2='https://httpstat.us/501';
const URL3='https://sdfsdfsdfsdfsdfsd.com';
    
fetch(URL)
      .then((response)=> {
       

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
       
        // console.log(response.status)

        return response.json()
    })
    
     .then((data)=>{
        setWord(data[0].meanings);
     })
    

    .catch((e)=>{
        setError(true);
        //console.log(response.status + ' Not OK error')
        //setNotFound(true)
     });

    
},[search]);

     if (notFound === true) {
                return (
                           <>
                                <IsNotFound />
                                <Link to="/dictionary">Search Again</Link>
                           </>
                    );
    } 

    if (error === true) {
                return (
                           <>
                                <p>Something went wrong, Try again</p>
                                <Link to="/dictionary">Search Again</Link>
                           </>
                    );
    } 


    return (
        <> 
        
            {word ?  
                    (  
                        <> 
                        <p> Here is a definition!</p>     
                        {word.map((meaning)=>{
                            return (
                                <p key={uuidv4()}>
                                {meaning.definitions[0].definition}
                                </p>
                            );
                        })}
                        <p>Search Again</p>
                        <DefinitionSearch/>
                        </>
                    )
            :
              null
            }
                       
        </>
    );

}
            
        