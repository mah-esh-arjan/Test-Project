import { useState } from "react"

const Filtered = () => {

    const dataArray = [
        "Apple", "Banana", "Orange", "Pineapple", "Grapes", "Watermelon", "Strawberry", "Blueberry", "Mango", "Kiwi", "Lemon", "Peach", "Coconut", "Dragonfruit", "Pomegranate", "Raspberry", "Blackberry", "Avocado", "Cherry", "Papaya"
      ];

    const [filtered, setFiltered] = useState("");
    const [searched,setSearched] = useState(dataArray);

    const handleFilterChange = (e) => {
        setFiltered(e.target.value);
        setSearched(dataArray.filter(item => item.toLowerCase().includes(filtered.toLowerCase())))
    }

    const handleSearched = () => {
        setSearched(dataArray.filter(item => item.toLowerCase().includes(filtered.toLowerCase())))
    }

    return(
        <>
        <input    
         value={filtered} 
         onChange={handleFilterChange}/>
         {/* <button onClick={handleSearched}>Search</button> */}
        {
            searched.map((item, index) => 
            <h1 key={index}>{item} </h1>)
        }
        </>
    )
}

export default Filtered;