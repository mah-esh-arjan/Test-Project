import { useState } from "react";


const Todo = () => {

    const [inputText,setInputText] = useState('');
    const [todoList,setTodoList] = useState([]);

    const handleInputChane = (e) => {
        setInputText(e.target.value)
    }
    
    const handleTodoClick = () => {
        setTodoList(todoList => [...todoList,inputText])
        setInputText('')
    }

    const handleTodoRemove = (removeIndex) => {
        setTodoList(todoList.filter((e,index) => index !== removeIndex))

    }

    return(
        <section>
             <h2> This is the TODO SECTION</h2>
            <input value={inputText} onChange={handleInputChane} placeholder="This is a TODO input"/>  
            <button onClick={handleTodoClick}> Add it!</button>
             {todoList.map((item, index) => (
                <>
               
                <h1 key={index}> {item} </h1>
                <button onClick={() => handleTodoRemove(index)}>Remove</button>
                </>
            ))}
            
        </section>
    )
}

export default Todo;