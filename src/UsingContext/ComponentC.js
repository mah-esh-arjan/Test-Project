import ComponentD from './ComponentD.js';
import './Component.css';


const ComponentC = ({props}) => {

   
    return(
        <div className="box">
            <h1>ComponentC</h1>
            <ComponentD props={props} />
         </div>
    )
}

export default ComponentC;