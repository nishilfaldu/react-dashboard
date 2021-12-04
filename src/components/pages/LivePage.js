import React from 'react';
import LiveDashboard from '../dashboards/LiveDashboard';
import Tab from '../menus/Tab'
import styled from 'styled-components';
import { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import NavbarLogo from '../navbar/NavbarLogo';
import NavbarNav from '../navbar/NavbarNav';
import Navbar from '../navbar/Navbar';

const StyledRow = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 1.3rem;
    padding-left: 15rem;
`

const LivePage = function(props){

    const tabButtonProps = {
        forLabel: ['registered', 'confirmed', 'checkedin'],
        textLabel: ['Registered', 'Confirmed', 'Checked In'],
        buttonIcon: [<PersonAddAlt1Icon/>, <HowToRegIcon/>, <CheckIcon/>]
    };

    const [data, setData] = useState('registered');

    let toRender;
    if (data === 'registered'){
        toRender = <LiveDashboard cardValue='50'></LiveDashboard>;
    }
    else if (data === 'confirmed'){
        toRender = <LiveDashboard cardValue='500'></LiveDashboard>;
    }
    else if (data === 'checkedin'){
        toRender = <LiveDashboard cardValue='5000'></LiveDashboard>;
    }
    else {
        toRender = <div style={{color: 'white'}}>WELCOME TO THE LIVE DASHBOARD!</div>
    }

    return(
        <div>
            {/* <NavbarLogo/>
            <NavbarNav/> */}
            <Navbar/>
            <StyledRow>
                <Tab onClick={setData} tabButtonAttributes={tabButtonProps}></Tab>
            </StyledRow>
            {toRender}
        </div>
    );
}

export default LivePage;