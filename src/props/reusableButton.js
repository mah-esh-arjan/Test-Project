import { useState } from "react";
import './reusable.css';

//Resuable Child

const ReusableButton = ({color, handleButtonClick}) => {

    return(
        <div className={color ? "reusable-red" : "reusable-blue"}>
            <button onClick={handleButtonClick}>{color? "Blue" : "Red"}</button>
        </div>
       
    )
}

export default ReusableButton;  