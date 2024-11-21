import { useState,useEffect } from "react";
import Operations from './operations';
import './calculator.css'

const Calculator = () => {

    const [number,setNumber] = useState([]);
    const [a,setA] = useState('');
    const [b,setB] = useState('');
    const [result, setResult] = useState(0);
    const [operator, setOperator] = useState('');

    useEffect(() => {

        let arr = []

        for(let i = 0; i<10; i++){
            arr.push(i)
        } 
        setNumber(arr);   
    }, 
[]
)

const handleNumberClick = (temp) => {

    if( a === ''){
        setA(temp);
    }
    else{
        setB(temp);
    }
}

const handleOperatorClick = () => {

    switch(operator){
        
        case '+':
            setResult(a+b);
            break;
        
        case '-':
            setResult(a-b);
            break;
        
        case '/':
            setResult(a / b );
            break;
        
        case '*':
            setResult(a*b);
            break;

    }
}


    return (
        <>
        <h1>Basic Calculator</h1>
        <h2>
        {a}
        {operator}
        {b}
        {'=' + result}
        </h2>
    <div className="number-button">
    {
        
        number.map((item,index) => (
           
            <button key={index} onClick={() => handleNumberClick(item)}> {item}</button>
           
        ))
    }
    </div>
    
    <div className="number-button">
     <button onClick={() => setOperator('+')}> + </button>
     <button onClick={() => setOperator('-')}> - </button>
     <button onClick={() => setOperator('/')}> / </button>
     <button onClick={() => setOperator('*')}> * </button>
     <button onClick={handleOperatorClick}> = </button>

     </div>
        </>
    );
}

export default  Calculator;