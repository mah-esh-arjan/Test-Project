import { useState } from "react";
import "./Accordian.css"

const Accordian = () => {
    const [toggle1,setToggle1] = useState(true)
    const [toggle2,setToggle2] = useState(true)
    const [toggle3,setToggle3] = useState(true)

    const handleClick1 = () => {
        setToggle1(toggle1 => !toggle1)
    }

    const handleClick2 = () => {
        setToggle2(toggle2 => !toggle2)
    }

    const handleClick3 = () => {
        setToggle3(toggle2 => !toggle2)
    }
    return(

        <section id="accordian">
            <div className="part">
            <h1>Title</h1>
            <button onClick={handleClick1}>This is a button</button>
            <div className={toggle1?'button':'hide'}>
            <h4>answer</h4>
            </div>
            </div>

            <div className="part">
            <h1>Title</h1>
            <button onClick={handleClick2}>This is a button</button>
            <div className={toggle2?'button':'hide'}>
            <h4>answer</h4>
            </div>
            </div>

            <div className="part">
            <h1>Title</h1>
            <button onClick={handleClick3}>This is a button</button>
            <div className={toggle3?'button':'hide'}>
            <h4>answer</h4>
            </div>
            </div>

        </section>
    )
}

export default Accordian;