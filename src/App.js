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
        <div className="App-header">
            <Link to="/live" style={{ textDecoration: 'none' }}><NavButton label="Live"></NavButton></Link>
            <Link to="/yearly" style={{ textDecoration: 'none' }}><NavButton label="Yearly"></NavButton></Link>
            <Link to="/trends" style={{ textDecoration: 'none' }}><NavButton label="Trends"></NavButton></Link>
        </div>

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
