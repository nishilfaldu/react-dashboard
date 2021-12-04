import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom';
import NavButton from '../buttons/NavButton';
import styled from 'styled-components';
import LivePage from '../pages/LivePage';
import YearlyPage from '../pages/YearlyPage';
import TrendsPage from '../pages/TrendsPage';
import { useState } from 'react';

const StyledRow = styled.div`
    position: absolute;
    top: 16rem;
    left: 2rem;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 1rem;
    padding-top: 1rem;
`

const NavRoutes = function(){

    const [activeLink, setActiveLink] = useState('Live');

    return(
        <div>
            <Router>
                <StyledRow>
                    <Link to="/" style={{ textDecoration: 'none' }}><NavButton label="Live" checked={activeLink === 'Live' ? true : false} setData={setActiveLink}></NavButton></Link>
                    <Link to="/yearly" style={{ textDecoration: 'none' }}><NavButton label="Yearly" checked={activeLink === 'Yearly' ? true : false} setData={setActiveLink}></NavButton></Link>
                    <Link to="/trends" style={{ textDecoration: 'none' }}><NavButton label="Trends" checked={activeLink === 'Trends' ? true : false} setData={setActiveLink}></NavButton></Link>
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
