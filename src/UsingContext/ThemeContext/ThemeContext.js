import { useState } from "react";
import ThemeA from "./ThemeA";

const ThemeContext = () => {

    const [theme,setTheme] = useState("lighter");

    const handleThemeClick = () => {

        setTheme(theme === "lighter"? "darker" : "lighter" )
    }

    return (
        <>
        <ThemeA click = {handleThemeClick} theme ={theme} />
        </>
    )
}

export default ThemeContext;