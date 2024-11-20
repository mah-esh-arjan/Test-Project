import { useState,useEffect } from "react";
import Operations from './operations'

const Calculator = () => {

    const [number,setNumber] = useState([]);
    const [a,setA] = useState('');
    const [b,setB] = useState('');
    const [result, setResult] = useState();
    const [operator, setOperator] = useState();

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
    {
        number.map((item,index) => (
            <button key={index} onClick={() => handleNumberClick(item)}> {item}</button>
            
        ))
    }
     <button onClick={() => setOperator('+')}> + </button>
     <button onClick={() => setOperator('-')}> - </button>
     <button onClick={() => setOperator('/')}> / </button>
     <button onClick={() => setOperator('*')}> * </button>
     <button onClick={handleOperatorClick}> = </button>
     {result}
        </>
    );
}

export default  Calculator;