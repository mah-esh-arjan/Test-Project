import { useState, createContext } from "react";
import ThemeA from "./ThemeA";

export const ThemeContextState = createContext()

const ThemeContext = () => {

    const [theme,setTheme] = useState("lighter");

    const handleThemeClick = () => {

        setTheme(theme === "lighter"? "darker" : "lighter" )
    }

    return (
        <ThemeContextState.Provider value={{theme, handleThemeClick}} >
        <ThemeA />
        </ThemeContextState.Provider>
    )
}

export default ThemeContext;