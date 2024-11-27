import "./Status.css"
import { useState } from "react";

const Status = ({id,username,handleOnline,isOnline}) => {
   


    return(
        <>
        <h1> {username}</h1>
        <span className={isOnline.includes(id) ? "icon online": "icon offline"}> </span>
        <button onClick={() => (handleOnline(id))}> Toggle Status</button>
        </>
    )
}

export default Status;