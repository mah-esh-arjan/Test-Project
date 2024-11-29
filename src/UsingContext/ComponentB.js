import ComponentC from './ComponentC.js';
import './Component.css';


const ComponentB = ({props}) => {

    return(
        <div className="box">
            <h1>ComponentB</h1>
           <ComponentC props={props}/>
         </div>
    )
}

export default ComponentB;