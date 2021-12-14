import React from 'react';
import YearlyDashboard from '../dashboards/YearlyDashboard';
import Navbar from '../navbar/Navbar';
import annualData from '../../assets/data/annual/annual';
import styled from 'styled-components';

const StyledRow = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-top: 1rem;
    padding-bottom: 1.3rem;
    padding-left: 14rem;
`

const YearlyPage = function(props){
    return(
        <div>
            <Navbar/>
            {/* <StyledRow> */}
            <YearlyDashboard data={annualData['hackSpring2014']}></YearlyDashboard>
            {/* </StyledRow> */}
        </div>
    );
}

export default YearlyPage;