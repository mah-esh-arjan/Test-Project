import { useState } from "react"
import TextInput from "./TextInput";

const FormInput = () => {

 const [input,setInput] = useState();

const handleInputChange = (e) => {

setInput(e.target.value);

}


    return(
        <>
        <TextInput handleInputChange={handleInputChange} input={input} placeholder = {"PlaceHOLD"} />
        </>
    )
}

export default FormInput