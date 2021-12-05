import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Favourites from './Components/Task/Favourites/Favourites.jsx';
import Homepage from './Components/Task/Homepage/Homepage.jsx';

function App() {
  let list=[];
  const [list1,setlist1] = useState(list);

  const adduser = (selectlist) =>{
    setlist1(selectlist);
  }

  return (
    <Router>
      <Routes>
            <Route exact path="/" element={<Homepage adduser={adduser}/>}></Route>
            <Route exact path="/favourites"  element={<Favourites list1={list1}/>} ></Route>
      </Routes>
    </Router>
  );
}

export default App;