import ComponentC from './ComponentC.js';
import './Component.css';


const ComponentB = () => {

    return(
        <div className="box">
            <h1>ComponentB</h1>
           <ComponentC />
         </div>
    )
}

export default ComponentB;