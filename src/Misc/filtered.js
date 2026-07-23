import { useState } from "react"

const Filtered = () => {

    const dataArray = [
        "Apple", "Banana", "Orange", "Pineapple", "Grapes", "Watermelon", "Strawberry", "Blueberry", "Mango", "Kiwi", "Lemon", "Peach", "Coconut", "Dragonfruit", "Pomegranate", "Raspberry", "Blackberry", "Avocado", "Cherry", "Papaya"
      ];

      const [data,setData] = useState(dataArray);
      const [input,setInput] = useState();

      const onSearchChange = (e) => {
        setInput(e.target.value);
      }

      const handleSearchClick = () => {
        if( input === ""){
            setData(dataArray);
        }
        else{
        setData(data.filter(item => item.toLowerCase().includes(input.toLowerCase())));
}
      }

    return(
        <>

        <input onChange={onSearchChange} value={input} /> 
        <button onClick={handleSearchClick}>Search </button>
        {data.map( (item,index) => (
            <h1 key={index}>{item}</h1>
        ))}
        </>
    )
}

export default Filtered;