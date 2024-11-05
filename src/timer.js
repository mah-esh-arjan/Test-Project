import { clear } from '@testing-library/user-event/dist/clear';
import React, { useState, useEffect } from 'react';

const Timer = () => {

  const [time, setTime] = useState(1);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval 

    if (isActive){
    
    interval = setInterval( () => {
      setTime(count => count + 1)}
      ,1000)
     }
    else{
    clearInterval(interval)
    }

    return (() => clearInterval(interval))
}, [isActive])
  
  const onActiveClick = () => {
    setIsActive( active => !active)
  }

  const onResetClick = () => {
    setTime(0);
    setIsActive(false)
  }

  return (
    <>
      <button onClick={onActiveClick} >{isActive ? 'stop' : 'start'} </button>
      {time}
    
      <button onClick={onResetClick}> Reset</button>
    </>
  )

};

export default Timer;