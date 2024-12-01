import { useState } from "react";
import ThemeB from "./ThemeB";
import './ThemeContext.css';

const ThemeA = () => {

    return (
        <div>
        <h1>Parent component Of ThemeB</h1>
        <ThemeB />

        </div>
    )
}

export default ThemeA;