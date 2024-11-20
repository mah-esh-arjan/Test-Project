import { useState } from "react";

const Operations = ({operation,a,b}) => {

    const Calculate = (operation) => {
    switch (operation) {
        case '+':
           return  (a+b);
           break;

        case '-':
           return  (a-b);
           break;

        case '*':
           return  (a*b);
           break;

        case '/':
           return  (a/b);
           break;
    }
}

    return (
        <>
       <button onClick={() => Calculate(operation)}> = </button>
        </>
    );
}

export default  Operations;