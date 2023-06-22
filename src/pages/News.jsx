import React, { useEffect } from "react";
import cards from "../data/newsbd.js"
import NewsList from "../components/UI/NewsCard/NewsList";

export default function OurWorks(){
    useEffect(() => {
        if ("caches" in window) {
          caches.keys().then((names) => {
            names.forEach((name) => {
              caches.delete(name);
            });
          });
        }
      }, []);
    return(
        <div className="main__news">
            <NewsList cards = {cards}/>
        </div>
    )
}