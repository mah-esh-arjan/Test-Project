import { Component } from "react";


const Card = ({title,content,props}) => {
    
    return(
        <>
        <h1>{title}</h1>
        <h1>{content}</h1>
        <div>{props}</div>
        </>
    )
}

export default Card;