import React from 'react';
import YearlyDashboard from '../dashboards/YearlyDashboard';
import Navbar from '../navbar/Navbar';
import annualData from '../../assets/data/annual/annual';
import styled from 'styled-components';

const StyledRow = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 1.3rem;
    padding-left: 15rem;
`

const YearlyPage = function(props){
    return(
        <div>
            <Navbar/>
            <StyledRow>
            <YearlyDashboard data={annualData['hackSpring2014']}></YearlyDashboard>
            </StyledRow>
        </div>
    );
}

export default YearlyPage;