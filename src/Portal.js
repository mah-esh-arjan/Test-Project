import { React,useState } from "react";
import './Portal.css';

const Portal = () => {

    const [toggle,setToggle] = useState(true)


    const handleToggle = () => {
        setToggle( toggle => !toggle)
    }

    return(
        <section id="background">
            <h1> background</h1>
            <button onClick={handleToggle} aria-expanded={!toggle} >OPEN</button>
            <div className ={toggle?'frontground' : 'hideground' }>
                <h1>forntground</h1>
                <button onClick={handleToggle}>CLOSE</button>
            </div>
            
        </section>
    )
}

export default Portal;