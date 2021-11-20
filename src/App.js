import './App.css';
import YearlyDashboard from './components/YearlyDashboard';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import NavButton from './components/NavButton';

function App() {
  return (
    <Router>
      <div className="App">
      {/* <StatsDashboard></StatsDashboard> */}
        <ul className="App-header">
          <li>
            <Link to="/live" style={{ textDecoration: 'none' }}><NavButton label="Live"></NavButton></Link>
          </li>
          <li>
            <Link to="/yearly" style={{ textDecoration: 'none' }}><NavButton label="Yearly"></NavButton></Link>
          </li>
          <li>
            <Link to="/trends" style={{ textDecoration: 'none' }}><NavButton label="Trends"></NavButton></Link>
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
