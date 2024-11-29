import { useState } from "react";
import ComponentB from './ComponentB.js';
import './Component.css';

const ComponentA = () => {

    const [user,setUser] = useState("BroCode");

    return(
        <div className="box">
        <h1>Hello {user}</h1>
        <ComponentB props={user}/>  
        </div>
    )
}

export default ComponentA;