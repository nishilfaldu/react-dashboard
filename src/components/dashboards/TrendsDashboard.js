import React from 'react';
// import LineChartCard from '../cards/charts/LineChartCard'; 
import styled from 'styled-components';
import BarChartCard from '../cards/charts/BarChartCard';
import PieChartCard from '../cards/charts/PieChartCard';

const StyledRow = styled.div`
    display: flex;
    padding-top: 5rem;
    justify-content: center;
    padding-left: 15rem;
    flex-direction: row;
`

// const StyledRow = styled.div`
//     display: flex;
//     justify-content: space-evenly;
//     padding-bottom: 1rem;
// `

const TrendsDashboard = function(){
    return(
        <div>
            <StyledRow>
                <BarChartCard cardTitle="Age" cardLabel="Current" cardValue='18+'></BarChartCard>
                <PieChartCard cardTitle="Ethnicities" cardLabel="Count" cardValue={props.ethnicityVal} chartType={'pie'}></PieChartCard>
            </StyledRow>

            <StyledRow>
                <PieChartCard cardTitle="Gender" cardLabel="Female" cardValue={props.genderVal} chartType={'donut'}></PieChartCard>
                <BarChartCard cardTitle="States" cardLabel="Count" cardValue={props.hackExperienceVal}></BarChartCard>
            </StyledRow>
            {/* <SparklineCard></SparklineCard> */}
        </div>
    );
}

export default TrendsDashboard;