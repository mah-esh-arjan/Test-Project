import { useState } from "react";

const InputTesting = () => {
    const [type,setType] = useState()
    

    const handleType = (e) => {
        setType(e.target.value)
    }
    return(
        <>
        <input value = {type} onChange={handleType} />
        </>
    )
}

const Testing = () => {

    return(
        <>
        <InputTesting />
        </>
    )
}

export default Testing;