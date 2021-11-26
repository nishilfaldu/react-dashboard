import React from 'react';
// import TrendsDashboard from './TrendsDashboard';
import styled from 'styled-components';
import { useState } from 'react';
import Tab from '../menus/Tab';

const StyledRow = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 1rem;
`

const TrendsPage = function(props){
    return(
        <div>
            <StyledRow>
                <Tab></Tab>
            </StyledRow>
            {/* <TrendsDashboard></TrendsDashboard> */}
        </div>
    );
}

export default TrendsPage;