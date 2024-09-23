import { React, useState } from "react";
import './counter.css';

const Counter = () => {

    const [count,setCount] = useState(0);
    const [css, setCss] = useState(true);

    const plusButton = () => {
        setCount (count+ 1);
    }

    const minusButton = () => {

        setCount (count -1);   }

    const cssClick = () => {
     setCss(prevCss => !prevCss);
    }

    return (
        <div className={css? "counter" : "counter-blue"}>
            <button onClick={cssClick}>Change Color</button>
            <button onClick={plusButton}>plusButton</button>
            {count}
            <button onClick={minusButton}> -</button>
        </div>
    )
}

export default Counter;