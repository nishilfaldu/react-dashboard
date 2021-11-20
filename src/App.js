import './App.css';
import YearlyDashboard from './components/YearlyDashboard';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      {/* <StatsDashboard></StatsDashboard> */}
        <ul className="App-header">
          <li>
            <Link to="/live">Live</Link>
          </li>
          <li>
            <Link to="/yearly">Yearly</Link>
          </li>
          <li>
            <Link to="/trends">Trends</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path='/live' component={YearlyDashboard}></Route>
          <Route exact path='/yearly' component={YearlyDashboard}></Route>
          <Route exact path='/trends' component={YearlyDashboard}></Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
