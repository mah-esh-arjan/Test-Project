import { useState } from "react";
import ThemeB from "./ThemeB";
import './ThemeContext.css';

const ThemeA = ({click,theme}) => {

    return (
        <div className={theme}>
        <h1> The curent theme is {theme}</h1>
        <button onClick={click}> Click</button>
        <ThemeB theme={theme}/>

        </div>
    )
}

export default ThemeA;