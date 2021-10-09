import React, { useState } from 'react';
import Profile from "./Profile.jsx";
import Settings from "./Settings.jsx";

export const ThemeContext = React.createContext();// context create ho gaya
function App() {
  const [lightTheme , setTheme] = useState(true);
  function toggleTheme(){
    setTheme((prevTheme) => !prevTheme);
  }

  return (
    <ThemeContext.Provider value = {lightTheme}>
      <div className="App">
        <button onClick={toggleTheme}>CHANGE BUTTON</button>
      <div>
      <Profile></Profile>
      <ThemeContext.Provider value={!lightTheme}>
      <Settings></Settings>
      </ThemeContext.Provider>
      </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
