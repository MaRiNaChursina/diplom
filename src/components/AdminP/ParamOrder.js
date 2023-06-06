import React from "react";

function ParamOrder (props) {
    const {item} = props;
    return(
        <>
            {item.Id}
            {item.date}
            {item.name}
           {item.phone}
        </>
    )
}

export default ParamOrder;