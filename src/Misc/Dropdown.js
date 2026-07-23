import { useState } from "react";
import './Accordian.css';


const Dropdown = () => {
    const [drop,setDrop] = useState(false);

    const handleMouseEnter = () => setDrop(true);
    const handleMouseLeave = () => setDrop(false);


    return(
        <>
        <button           
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}>Dropdown</button>
        <div 

          className={drop ? "show" : "hide"}>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
        </>
    )
}

export default Dropdown;