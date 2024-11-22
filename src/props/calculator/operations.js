import { useState,useEffect } from "react";
import './calculator.css'

const Operations = ({operator,a,b,setOperator, setA, setB}) => {
  
    const [number,setNumber] = useState([]);

    const [result, setResult] = useState(0);
   
    
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

    const handleNumberClick = (temp) => {

        if( a === ''){
            setA(temp);
        }
        else{
            setB(temp);
        }
    }

    useEffect(() => {

        let arr = []

        for(let i = 0; i<10; i++){
            arr.push(i)
        } 
        setNumber(arr);   
    }, 
[]
)
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

export default  Operations;