import "./Status.css"
import { useState } from "react";

const Status = ({online,username}) => {
    const [isOnline,setIsOnline] = useState(false);
    const handleStatusClick = () => {
        setIsOnline( toggle => !toggle )
    }

    return(
        <>
        <h1> {username}</h1>
        <span className={isOnline? "icon online": "icon offline"}> </span>
        <button onClick={handleStatusClick}> Toggle Status</button>
        </>
    )
}

export default Status;