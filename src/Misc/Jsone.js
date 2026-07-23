import { useState } from "react";
import './Accordian.css';

const Jsone = () => {
  const [list,setList] =useState([]);



  const AccordianList = [
    {"id":  1, "name": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {"id":  2, "name": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    {"id":  3, "name": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
  ]


  const handleAccordianList = (id) => {
    if(list.includes(id)){
      setList(list.filter(list => list !== id))
    }
    else{
      setList([...list, id])
    }

  }

  return (
    <section id="Accordian-Component">
   {
    AccordianList.map((item) => (
      <div key={item.id}>
      <button onClick={() => handleAccordianList(item.id)}> Section {item.id}</button>
      <h1 className={list.includes(item.id)? "show" : "hide"}> {item.name}</h1>
      </div> 
    ))
   }
    
    </section>
  )
}

export default Jsone