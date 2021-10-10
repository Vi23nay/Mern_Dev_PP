import './App.css';
import Login from './Components/Login/Login.jsx';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Mainpage from './Components/Mainpage/Mainpage.jsx';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
      <Route path="/" component={Login} exact></Route>
      <Route path="/mainpage" component={Mainpage} exact></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;