

const TextInput = ({placeholder,input,handleInputChange}) => {

    return(
        <>
        <input type="string" placeholder = {placeholder} onChange={handleInputChange} value={input}/>
        {input}
        </>
    )
}

export default TextInput;