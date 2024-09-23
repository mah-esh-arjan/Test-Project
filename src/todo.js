import { useState } from "react";


const Todo = () => {
    const [text,setText] = useState('');
    const [list,setList] = useState([]);

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleClick = () => {
        setList([...list, text])
        setText('')

    }

    const handleRemove = (remove) => {
        setList(
            list.filter((filtered,index) => index !== remove)
        )
    }
    
    return(
        <section>
            <h1>render</h1>
            <input type="text" value={text} onChange={handleChange}  />
            <button onClick={handleClick}> Add it</button>
            <ul>
        {
            list.map((item,index)=> (
                <li key={index}> {item} 
                  <button onClick={() => handleRemove(index)}>Remove</button> </li>
               
            ))
        }
        </ul>
        </section>
    )
}

export default Todo;