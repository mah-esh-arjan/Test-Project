import { useState } from "react"

const Filtered = () => {

    const dataArray = [
        "Apple", "Banana", "Orange", "Pineapple", "Grapes", "Watermelon", "Strawberry", "Blueberry", "Mango", "Kiwi", "Lemon", "Peach", "Coconut", "Dragonfruit", "Pomegranate", "Raspberry", "Blackberry", "Avocado", "Cherry", "Papaya"
      ];

    const [filterInput,setFilterInput] = useState();
    const [fruitList,setFruitList] = useState(dataArray);
    
    const handleFilterChange = (e) => {
        setFilterInput(e.target.value)
    }

    const handleFruitSearch = () => {
        if(filterInput == "" || filterInput == " "){
            setFruitList(dataArray)
        }
        else {
        setFruitList(fruitList.filter(item => item.toLowerCase().includes(filterInput.toLowerCase())))
     }
    }

    return(
        <>
        <input value = {filterInput} onChange={handleFilterChange}/>
        <button onClick={handleFruitSearch} >Search</button>
        <ol>
        {
            fruitList.map((item,index) => (
                <li key={index}> {item}</li>
            ))
        }
        </ol>
        </>
    )
}

export default Filtered;