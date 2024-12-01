import { useState, useContext } from "react";
import './ThemeContext.css';

import { ThemeContextState } from "./ThemeContext";

const ThemeB = () => {
    const {theme , handleThemeClick} = useContext(ThemeContextState)

    return (
        <div className={theme}>
        <h1> B {theme}</h1>
        <button onClick={handleThemeClick}>Change</button>
        </div>
    )
}

export default ThemeB;