import React, { useState, useEffect } from 'react';
import Header from "./Components/Header/Header.jsx";
import Contents from "./Components/Contents/Contents.jsx";
import axios from "axios";
import "./App.css";

export const ThemeContext = React.createContext();

function App() {
  const [cursorX , setCursorX] = useState();
  const [cursorY , setCursorY] = useState();

  window.addEventListener("mousemove" , (e) =>{
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });

  return (
    <ThemeContext.Provider>
      {/* <div className="cursor" 
      style= {{
        left:cursorX + "px",
        top: cursorY + "px"
      }}
      ></div> */}
      {/* <Header></Header> */}
      <Contents></Contents>
    </ThemeContext.Provider>
  );
}

export default App;