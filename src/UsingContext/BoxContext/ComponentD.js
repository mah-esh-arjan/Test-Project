import { useContext } from 'react';
import { NameContext } from './ComponentA';

import './Component.css';

const ComponentD = () => {
    const name = useContext(NameContext);

    return(
        <div className="box">
            <h1>ComponentD</h1>
            <h2> Bye {name }</h2>
        </div>
    )
}

export default ComponentD;