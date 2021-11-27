import React from 'react';
import LiveDashboard from '../dashboards/LiveDashboard';
import Tab from '../menus/Tab'
import styled from 'styled-components';
import { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const StyledRow = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 1rem;
`

const LivePage = function(props){

    const tabButtonProps = {
        forLabel: ['registered', 'confirmed', 'checkedin'],
        textLabel: ['Registered', 'Confirmed', 'Checked In'],
        buttonIcon: [<PersonAddAlt1Icon/>, <HowToRegIcon/>, <CheckIcon/>]
    };

    const [data, setData] = useState('0');

    let toRender;
    if (data === 'registered'){
        toRender = <LiveDashboard ethnicityVal='5'
                                    countriesVal='5'
                                    degreesVal='5'
                                    majorsVal='5'
                                    genderVal='5'
                                    hackExperienceVal='5'></LiveDashboard>;
    }
    else if (data === 'confirmed'){
        toRender = <LiveDashboard ethnicityVal='50'
                                countriesVal='50'
                                degreesVal='50'
                                majorsVal='50'
                                genderVal='50'
                                hackExperienceVal='50'></LiveDashboard>;
    }
    else if (data === 'checkedin'){
        toRender = <LiveDashboard ethnicityVal='500'
                                    countriesVal='500'
                                    degreesVal='500'
                                    majorsVal='500'
                                    genderVal='500'
                                    hackExperienceVal='500'></LiveDashboard>;
    }
    else {
        toRender = <div style={{color: 'white'}}>WELCOME TO THE LIVE DASHBOARD!</div>
    }

    return(
        <div>
            <StyledRow>
                <Tab onClick={setData} tabButtonAttributes={tabButtonProps}></Tab>
            </StyledRow>
            {toRender}
        </div>
    );
}

export default LivePage;