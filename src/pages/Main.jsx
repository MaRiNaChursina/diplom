import React, { useEffect, useState } from "react";

import CardsList from "../components/Main/CardsList";
import MainImg from "../components/Main/MainImg";

export default function Main(){
    const [cards,setCards] = useState("");
    
    useEffect(()=>{
        submitForm()
    },[])
    useEffect(() => {
        if ("caches" in window) {
          caches.keys().then((names) => {
            names.forEach((name) => {
              caches.delete(name);
            });
          });
        }
      }, []);

    const submitForm = ()=>{

       fetch("http://chursina21.temp.swtest.ru/cardourwork.php",{
            method:"GET",
            header: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*'
            }
            
        }).then(response => response.json())
        .then(response => {setCards(response);})
    }
    return(
        <div className="main">
            <MainImg/>
            <CardsList cards={cards}/>
        </div>
    )
}