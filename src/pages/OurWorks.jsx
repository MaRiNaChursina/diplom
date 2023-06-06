import React, { useEffect, useState } from "react";
import CatalogList from "../components/UI/CatalogCard/CatalogList";

export default function OurWorks(){
    const [catalog,setCatalog] = useState("");
    
    useEffect(()=>{
        submitForm()
    },[])
    const submitForm = ()=>{
       fetch("http://chursina21.temp.swtest.ru/catalogbd.php",{
            method:"GET",
            header: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
            
        }).then(response => response.json())
        .then(response => {setCatalog(response);})   
    }
   
    return(
        <div className="main__work">
            {catalog &&<><CatalogList catalog={catalog}/></>} 
        </div>
    )
}