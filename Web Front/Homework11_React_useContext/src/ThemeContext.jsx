import { createContext, useContext, useState, useEffect } from "react";


const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) =>{
  const storedTheme = localStorage.getItem("theme");
  const initialTheme = storedTheme ? JSON.parse(storedTheme) : "light";
  
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };



    return(
        <ThemeContext.Provider value={{theme, changeTheme}}>
            { children }
        </ThemeContext.Provider>
    );
}