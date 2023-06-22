﻿import React from "react";
import { Link} from "react-router-dom";



export default function NewsList({cards}){
    const cardElements = cards.map(card => 
        <li className="news__li" key={card.id}> 
        <div className="news__block"><img src={ card.imgCard}/>
        <div className="news__text">
            <h2>{card.title}</h2> 
            <p>{card.discription}</p>
            <Link to={`/news/${card.title}`} className="catalog__cards">
                Подробнее
            </Link>
        </div></div>
        </li>
    )
    return(
        <ul className="news_ab">
            {cardElements}
        </ul>
    )
}