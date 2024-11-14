import { useState, useEffect } from "react";
import './pomodoro.css'

const Pomodoro = () => {

    const [time,setTime] = useState(1500);
    const [isActive, setIsActive] = useState(true);
    const [currentPomo,setCurrentPomo] = useState(1);
    const [background,setBackground] = useState("red");

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    
    // Format minutes and seconds as "MM:SS"
    const displayTime = `${minutes}:${String(seconds).padStart(2, '0')}`;

useEffect(
   () => {
    let interval;

    if (isActive){
        if(time ===0) {
            handleNext();
        }
    else{
       interval = setInterval( () =>  {
        setTime(count => count - 1)
       } ,1000)
    }
   }
    return (() => clearInterval(interval))
   },
    [isActive, time]
)   

const handleActive = () => {
    setIsActive( active => !active)
}

const handleReset = () => {
    setIsActive(false);
    setTime(1500)
}

const handlePomodoro = () => {
    setTime(1500);
    setBackground("red")
}

const handleShort = () => {
    setTime(300);
    setBackground("green")
}

const handleLong = () => {
    setTime(600);
    setBackground("blue")
}

const handleNext = () => {
    setCurrentPomo(count => count + 1)

    if( currentPomo % 7 === 0){
        handleLong();
    }

    else if( currentPomo % 2 === 0){
        handlePomodoro();
    }

    else {
        handleShort();
    }
}

const minusButton = () => {
    setTime(count => count - 10)
}

const backgroundClasses = {
    red : "red",
    green: "green",
    blue: "blue"

}

    return(
    <div className={backgroundClasses[background]}>
        <h1> Pomodoro number: {currentPomo}</h1>
        <div className="Pomodoro-buttons">
            <button onClick={handlePomodoro}>Pomodoro </button>
            <button onClick={handleShort}>Short    </button>
            <button onClick={handleLong}>Long     </button>
        </div>

        <h1>{displayTime}</h1>

        <div className="Pomodoro-buttons">
            <button onClick={handleActive}>{isActive ? "Stop" : "Start"} </button> 
            <button onClick={handleReset}> Reset</button>
            <button onClick={handleNext}> Next</button>
            <button onClick={minusButton}> MInus</button>
        </div>
    </div>
    )
}

export default Pomodoro;