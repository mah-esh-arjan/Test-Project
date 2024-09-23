import {React,useState} from "react";

const Small = ({inputText, handleInputChange}) => {
    return(
        <>
        <h1>text</h1>
        <input type = "text" value = {inputText} onChange={handleInputChange}/>
          <h1>  {inputText} </h1>
          </>
    )
}

const Input = () => {
    const[inputText,setInputText] = useState('');


    const handleInputChange = (e) => { 
        setInputText(e.target.value)
    }


    return(
       <>
        <Small inputText={inputText} handleInputChange={handleInputChange}  />
       </>
    )
}

export default Input;