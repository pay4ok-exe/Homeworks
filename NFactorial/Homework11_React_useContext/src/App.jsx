import './App.css'
import { ThemeProvider, useTheme } from "./ThemeContext";

function Switcher() {
  const {theme, changeTheme} = useTheme();
  console.log(theme)

  return (
      <div className={`Switcher ${theme}`}>
          <span className={`text ${theme}-text`} >{theme} theme</span>
          <button className={`btn ${theme}-btn`} onClick={changeTheme}>Change a theme</button>
      </div>
  );
}


function App() {

  return (
    <ThemeProvider>
      <Switcher/>
    </ThemeProvider>
  )
}

export default App
