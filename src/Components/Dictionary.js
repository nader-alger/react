import { useState,useEffect } from "react"

export default function Ditionary() {
   
    const [word,setWord]=useState('');
    
    useEffect(()=>{
        console.log('state is updated',word);
    },[word]); 
    
    return (
        <>
        <input 
        type="text" 
        onChange={(e)=>{
        setWord(e.target.value);
        }}
        />
       
          
          <h1>let us define the {word}</h1>
          
        </>
    );
} 