import React from 'react';
import LineChartCard from '../cards/charts/LineChartCard'; 
import styled from 'styled-components';

const StyledRow = styled.div`
    display: flex;
    padding-top: 5rem;
    justify-content: center;
    padding-left: 15rem;
    flex-direction: row;
`

const TrendsDashboard = function(){
    return(
        <div>
            <StyledRow>
                <LineChartCard cardTitle='Experience' cardLabel='Hackathons' cardValue='10'></LineChartCard>
            </StyledRow>
        </div>
    );
}

export default TrendsDashboard;