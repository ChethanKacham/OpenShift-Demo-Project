import './App.css'
import Nav1 from './components/Nav1'
import Nav2 from './components/Nav2'
import Forms from './components/Forms'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Confirmation from './components/Confirmation'

function App() {
  return (
    <div className="App">
      <h1>OpenShift Demo</h1>
      <Router>
          <Switch>
            <Route path="/" exact component={ Nav1 }></Route>
            <Route path="/OpenShiftProject" exact component={ Nav2 }></Route>
            <Route path="/OpenShiftProject/CreateProject" exact component={ Forms }></Route>
            <Route path="/OpenShiftProject/CreateProject/Confirmation" exact component={ Confirmation }></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
