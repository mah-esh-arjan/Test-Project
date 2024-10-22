import { clear } from '@testing-library/user-event/dist/clear';
import React, { useState, useEffect } from 'react';

const Timer = () => {

  const [time,setTime] = useState(0);
  const [isActive,setIsActive] = useState(false);

  useEffect(() => {

    let interval = null;

    if(isActive){
     interval = setInterval(() => {
      setTime(prev => prev +1)
    }, 1000)}
    else{
    clearInterval(interval)
   }

   return () => clearInterval(interval);
  },
    [isActive]
  );

  const handleActive = () => {
    setIsActive(isActive => !isActive );
  }


  const handleStop = () => {
    setTime(0)
    setIsActive(false); 
  }

  return (
    <>
    <button onClick={handleActive}>{ isActive? 'Stop': 'Start'}</button>
  
    {time}
    <button onClick={handleStop}>Reset</button>
    </>
  )

};

export default Timer;