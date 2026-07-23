import { useState, useEffect } from "react";


const Reverse = () => {

    const [isActive, setIsActive] = useState(true);
    const [time, setTime] = useState(50);
    

    useEffect(() => {
    let interval;
       
    if(isActive){
    interval = setInterval(() => {
        setTime( count => count - 1)} 
        ,1000)
        
    } 
    
    
    return (() => clearInterval(interval))
    }, 
    
    [isActive]);

    const onActiveClick = () => {
        setIsActive( active => !active)
      }
    

    return(
        <>
         <button onClick={onActiveClick} >{isActive ? 'stop' : 'start'} </button>
        {time}
        </>
    )
}

export default Reverse