import YearlyDashboard from '../YearlyDashboard';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import NavButton from '../NavButton';

const NavRoutes = function(){
    return(
        <div>
            <Router>
                <div className="Navbar">
                    <Link to="/live" style={{ textDecoration: 'none' }}><NavButton label="Live"></NavButton></Link>
                    <Link to="/yearly" style={{ textDecoration: 'none' }}><NavButton label="Yearly"></NavButton></Link>
                    <Link to="/trends" style={{ textDecoration: 'none' }}><NavButton label="Trends"></NavButton></Link>
                </div>

                <Switch>
                    <Route exact path='/live' component={YearlyDashboard}></Route>
                    <Route exact path='/yearly' component={YearlyDashboard}></Route>
                    <Route exact path='/trends' component={YearlyDashboard}></Route>
                </Switch>
            </Router>
        </div>
    );
    
}

export default NavRoutes;
