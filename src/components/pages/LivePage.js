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

// const handleChange = function(whichTab){
//     console.log(whichTab);
// }

const LivePage = function(props){

    const [data, setData] = useState('');

    const handleChange = (passedData) => {
        // setData(passedData);
        console.log(passedData);
    };

    return(
        <div>
            <StyledRow>
                <Tab onClick={handleChange}></Tab>
            </StyledRow>
            <LiveDashboard></LiveDashboard>
        </div>
    );
}

export default LivePage;