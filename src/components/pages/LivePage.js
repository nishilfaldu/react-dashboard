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

    const [data, setData] = useState('registered');

    let toRender;
    if (data === 'registered'){
        toRender = <LiveDashboard></LiveDashboard>;
    }
    else if (data === 'confirmed'){
        toRender = <div style={{color: 'white'}}>CONFIRMED DASHBOARD</div>;
    }
    else if (data === 'checkedin'){
        toRender = <div style={{color: 'white'}}>CHECKED IN DASHBOARD</div>;
    }
    else {
        toRender = '404!'
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