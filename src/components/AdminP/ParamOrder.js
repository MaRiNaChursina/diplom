import React from "react";

function ParamOrder (props) {
    const {item} = props;
    return(
        <div>
            <p>{item.Id}</p>
            <p>{item.date}</p>
            <p>{item.name}</p>
           <p>{item.phone}</p>
        </div>
    )
}

export default ParamOrder;