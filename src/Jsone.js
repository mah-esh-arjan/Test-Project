import { useState } from "react";
import './Accordian.css';

const Jsone = () => {
  const [list,setList] =useState([]);



  const AccordianList = [
    {"id":  1, "name": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {"id":  2, "name": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {"id":  3, "name": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  ]

  const handleClick = (id) => {
    if(list.includes(id)){
      setList(list.filter(list => list !== id ))
    }
    else {
    setList(list => [...list, id])
  }
  }

  const Accordian = ({id,name}) =>{
    return (
      <section id="Accordian-Component">  
      <button onClick={() => (handleClick(id))}>{"Section" + id}</button>
        <div className={list.includes(id)? "show" : "hide"}>{name}</div>
      </section>
    
  )
  }

  return (
    <section>
      {AccordianList.map(item => (
         <Accordian 
          key = {item.id}
          id = {item.id}
          name={item.name}
        />
    ))}
    
    </section>
  )
}

export default Jsone