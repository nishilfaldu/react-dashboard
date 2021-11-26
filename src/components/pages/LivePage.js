import React from 'react';
import LiveDashboard from '../dashboards/LiveDashboard';
import Tab from '../menus/Tab'
import styled from 'styled-components';
import { useState } from 'react';

const StyledRow = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 1rem;
`

const LivePage = function(props){

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
        toRender = <div style={{color: 'white'}}>CONFIRMED DASHBOARD</div>;
    }
    else if (data === 'checkedin'){
        toRender = <div style={{color: 'white'}}>CHECKED IN DASHBOARD</div>;
    }
    else {
        toRender = <div style={{color: 'white'}}>WELCOME TO THE LIVE DASHBOARD!</div>
    }

    return(
        <div>
            <StyledRow>
                <Tab onClick={setData}></Tab>
            </StyledRow>
            {toRender}
        </div>
    );
}

export default LivePage;