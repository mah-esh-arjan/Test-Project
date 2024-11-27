import LiftUp from "./liftup";
import { useState } from "react";

const Lifted = () => {
   
    const [liftArr,setLiftArr] = useState([]);

    const handleLift = (id) => {
        setLiftArr([...liftArr, id])
    }

    return(
        <>
        <LiftUp int={1} handleLift={handleLift} />
        <LiftUp int={2} handleLift={handleLift} />
        {
            liftArr.map((item,index) => (
            <h1 key={index}>{item}</h1>
            ))
        }
        </>
    )
}

export default Lifted;