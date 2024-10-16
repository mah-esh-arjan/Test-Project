import { useState } from "react";


const Todo = () => {

    const [todo, setTodo] = useState();
    const [todoList, setTodoList] = useState([]);

   const handleTodoChange = (e) => {
        setTodo(e.target.value)
    }

    const handleTodoClick = () => {
        setTodoList([...todoList, todo])
        setTodo('');
    } 

    const handleTodoRemove = (removeIndex) => {
        setTodoList(todoList.filter((todoList,index) => index !== removeIndex))
    }

    return(
        <section>
            <input value={todo} onChange={handleTodoChange} />
            <button onClick={handleTodoClick}>Add</button>
            <ol>
        {
            todoList.map((item,index) => (
                <li key={index}>{item}
                <button onClick={() => handleTodoRemove(index)}> Remove </button>
                </li>
            ))
        }
        </ol>

        </section>
    )
}

export default Todo;