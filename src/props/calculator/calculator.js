import { useState } from "react";
import Operations from './operations'

const Calculator = () => {

    const [number,setNumber] = useState([]);

    for(let i=0; i<9; i++){
        setNumber([...number], i)
    }

    return (
        <>
    {
        number.map((item,index) => (
            <h1 key={index}> {item}</h1>
        ))
    }
        <Operations />
        </>
    );
}

export default  Calculator;