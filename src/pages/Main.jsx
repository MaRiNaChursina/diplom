import React, { useEffect, useState } from "react";

import CardsList from "../components/Main/CardsList";

export default function Main(){
    const [cards,setCards] = useState("");
    
    useEffect(()=>{
        submitForm()
    },[])

    const submitForm = ()=>{

       fetch("http://chursina21.temp.swtest.ru/cardourwork.php",{
            method:"GET",
            // header: {
            //     'Content-Type': 'application/x-www-form-urlencoded',
            // }
            
        }).then(response => response.json())
        .then(response => {setCards(response);})
    }
    return(
        <div className="main">
            <CardsList cards={cards}/>
        </div>
    )
}