import YearlyDashboard from '../YearlyDashboard';
import LiveDashboard from '../LiveDashboard';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import NavButton from '../NavButton';
import styled from 'styled-components';
import LivePage from '../LivePage';
import YearlyPage from '../YearlyPage';
import TrendsPage from '../TrendsPage';

const StyledRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 1rem;
    padding-top: 1rem;
`

const NavRoutes = function(){
    return(
        <div>
            <Router>
                <StyledRow>
                    <Link to="/" style={{ textDecoration: 'none' }}><NavButton label="Live"></NavButton></Link>
                    <Link to="/yearly" style={{ textDecoration: 'none' }}><NavButton label="Yearly"></NavButton></Link>
                    <Link to="/trends" style={{ textDecoration: 'none' }}><NavButton label="Trends"></NavButton></Link>
                </StyledRow>

                <Switch>
                    <Route exact path='/' component={LivePage}></Route>
                    <Route exact path='/yearly' component={YearlyPage}></Route>
                    <Route exact path='/trends' component={TrendsPage}></Route>
                </Switch>
            </Router>
        </div>
    );
    
}

export default NavRoutes;
