import Progress from "./progress";
import { useState } from "react";

const ProgressBar = () => {

    const [percent,setPercent] = useState(20)

    return (
        <>
        <Progress percent={percent}/>
        <button onClick={() => setPercent(percent + 10)}> Plus </button>
        <button onClick={() => setPercent(percent - 10)}> Minus </button>
        </>
    )
}

export default ProgressBar;