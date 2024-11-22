import { useState,useEffect } from "react";
import Operations from './operations';
import './calculator.css'

const Calculator = () => {
    const [operator, setOperator] = useState('');
    const [a,setA] = useState('');
    const [b,setB] = useState('');


    return (
        <>
    <Operations a={a} b={b} operator={operator} setA={setA} setB={setB} setOperator={setOperator}/>

        </>
    );
}

export default  Calculator;