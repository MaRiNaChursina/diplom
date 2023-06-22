import React from "react";

const MainImg = () =>{

    return(
        <div className="main__img-img"> 
            
            <div id="axis" className="two">
                <img className="two_bottom object" src="./imges/main/2.png"/>                                
            </div>
            <div id="axis" className="one">
                <img className="one_right object_after" src="./imges/main/1.png"/>
            </div>
            
             <div id="axis" className="three">
                <img className="three_left object" src="./imges/main/3.png"/>                    
            </div>
            <div id="axis" className="four">
                <img className="four_bottom object_after" src="./imges/main/4.png"/>                    
            </div>
            <div id="axis" className="five">
                <img className="five_left object_after" src="./imges/main/5.png"/>                    
            </div>
            <div id="axis" className="six">
                <img className="six_top object" src="./imges/main/6.png"/>                    
            </div>
            <div id="axis" className="seven">
                <img className="seven_right object_after" src="./imges/main/7.png"/>                    
            </div>
            <div id="axis" className="eight">
                <img className="eight_right object" src="./imges/main/8.png"/>                                
            </div>
           <div className="nine">
                <div>
                    <img src="./imges/logo.svg"/>
                    <p>ДиАл</p>
                </div>
            </div>
        </div>
    )
}

export default MainImg;