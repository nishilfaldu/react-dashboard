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

    const [data, setData] = useState('0');

    // if (data = 'input-1')
    return(
        <div>
            <StyledRow>
                <Tab onClick={setData}></Tab>
            </StyledRow>
            {/* {data === 'input-1' ? <LiveDashboard></LiveDashboard> : <div>NADA</div>} */}
            <LiveDashboard></LiveDashboard>
        </div>
    );
}

export default LivePage;