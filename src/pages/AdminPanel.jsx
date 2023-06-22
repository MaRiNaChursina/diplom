import React, { useEffect } from "react";
import LogoAdmin from "../components/AdminP/LogoAdmin";






export default function AdminPanel(){
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
        <div className="main__admin">
            <LogoAdmin/>
        </div>
    )
}