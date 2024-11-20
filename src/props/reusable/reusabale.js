// this is a resuable button practice for props
//Reusable Parent
import { useState } from "react";
import './reusable.css'
import ReusableButton from "./reusableButton";

const Reusable = () => {

const [isRed, setIsRed] = useState(true);

const handleRedClick = () =>{
    setIsRed(toggle => !toggle)
}

    return(
        <>
        <ReusableButton handleButtonClick={handleRedClick} color = {isRed} />
        </>
    )

}

export default Reusable;