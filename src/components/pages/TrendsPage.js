import React from 'react';
// import TrendsDashboard from './TrendsDashboard';
import styled from 'styled-components';
import { useState } from 'react';
import Tab from '../menus/Tab';
import LiveDashboard from '../dashboards/LiveDashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SchoolIcon from '@mui/icons-material/School';

const StyledRow = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 1rem;
`

const TrendsPage = function(props){

    const tabButtonProps = {
        forLabel: ['participation', 'demographics', 'education'],
        textLabel: ['Participation', 'Demographics', 'Education'],
        buttonIcon: [<PeopleAltIcon/>, <AnalyticsIcon/>, <SchoolIcon/>]
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
            {/* <TrendsDashboard></TrendsDashboard> */}
        </div>
    );
}

export default TrendsPage;