import { clear } from '@testing-library/user-event/dist/clear';
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time,setTime] = useState (0);
  const [isActive,setIsActive] = useState(false);

  useEffect( () => {
    
    let interval;
    if(isActive){
    interval = setInterval( () => setTime( time => time +1), 1000);
    }
    return (() => clearInterval(interval));
  }, [isActive])

  const toggleAcitve = () => {
    setIsActive(active => !active)

  }

  const onClick = () => {
    
  }

  return (
    <>
    <button onClick={toggleAcitve}> {isActive? 'stop': 'start'}</button>
    <button> Reset</button>
    <h1> {time}</h1>
    </>
  )

};

export default Timer;