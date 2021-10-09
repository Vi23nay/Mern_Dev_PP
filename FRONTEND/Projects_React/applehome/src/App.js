import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Login from "./Components/Login/Login.jsx";
import Signup from "./Components/SignUp/Signup";
import Homepage from "./Components/Homepage/Homepage";
import { AuthContext, AuthProvider } from "./context/AuthProvider";
import Iphone12 from "./Components/Iphone12/Iphone12.jsx";
import Iphone12pro from "./Components/Iphone12pro/Iphone12pro.jsx";
import Ipadpro from "./Components/Ipadpro/Ipadpro.jsx";
import tv from "./Components/Tv+/Tv.jsx";
import Support from "./Components/Support/Support.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import Shopping from "./Components/Shoppingcart/Shopping.jsx";
import VideoPost from "./Components/VideoPost/VideoPost.jsx";
import Discussion from "./Components/Discussion/Discussion.jsx";
import Buynowpage from "./Components/Buynowpage/Buynowpage.jsx";

function App() {
  return (
    <AuthProvider>
       <Router>
        <div className="App">
          <Header></Header>
          <Switch>
            <Route path="/" component={Homepage} exact></Route>
            <Route path="/login" component={Login} exact></Route>
            <Route path="/signup" component={Signup} exact></Route>
            <Route path="/iphone12" component={Iphone12} exact></Route>
            <Route path="/iphone12Pro" component={Iphone12pro} exact></Route>
            <Route path="/ipadPro" component={Ipadpro} exact></Route>
            <Route path="/tv" component={tv} exact></Route>
            <Route path="/support" component={Support} exact></Route>
            <Route path="/profile" component={Profile} exact></Route>
            <Route path="/shopping" component={Shopping} exact></Route>
            <Route path="/videoPost" component={VideoPost} exact></Route>
            <Route path="/discussion" component={Discussion} exact></Route>
            <Route path="/Buynowpage" component={Buynowpage} exact></Route>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;