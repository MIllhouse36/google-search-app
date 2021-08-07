import './App.css';
import Main from "./components/Main"
import Nav from './components/Nav';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved"
import NoMatch from "./pages/NoMatch"
function App() {
  return (
    < Router>
    <div>
     <Nav/>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path= "/saved" component={Saved}/>
       <Route component={NoMatch}/>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
