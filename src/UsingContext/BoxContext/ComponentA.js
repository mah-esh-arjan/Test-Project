import { useState, createContext } from "react";
import ComponentB from './ComponentB.js';
import './Component.css';

export const NameContext = createContext();

const ComponentA = () => {



    const [user,setUser] = useState("BroCode");

    return(
        <div className="box">
         <h1>ComponentA</h1>
          <h2>Hello {user}</h2>
        <NameContext.Provider value={user}>
        <ComponentB  />  
        </NameContext.Provider>
        </div>
    )
}

export default ComponentA;