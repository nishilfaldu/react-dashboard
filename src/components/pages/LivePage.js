import React from 'react';
import LiveDashboard from '../dashboards/LiveDashboard';
import Tab from '../menus/Tab'
import styled from 'styled-components';

const StyledRow = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 1rem;
`

const LivePage = function(props){
    return(
        <div>
            <StyledRow>
                <Tab></Tab>
            </StyledRow>
            <LiveDashboard></LiveDashboard>
        </div>
    );
}

export default LivePage;