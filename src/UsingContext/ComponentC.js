import ComponentD from './ComponentD.js';
import './Component.css';
import { useContext } from 'react';
import { NameContext } from './ComponentA.js';

const ComponentC = () => {

    const name = useContext(NameContext)

    return(
        <div className="box">
            <h1>ComponentC {name}</h1>
            <ComponentD  />
         </div>
    )
}

export default ComponentC;