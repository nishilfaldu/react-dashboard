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

const TrendsDashboard = function(props){
    return(
        <div>
            <StyledRow>
                <BarChartCard cardTitle="Age" cardLabel="Current" cardValue='18+' labelData={props.data.labelAges} seriesData={props.data.seriesAge}></BarChartCard>
                <PieChartCard cardTitle="Ethnicities" cardLabel="Count" cardValue='7' chartType={'pie'} labelData={props.data.labelEthnicities} seriesData={props.data.seriesEthnicities}></PieChartCard>
            </StyledRow>

            <StyledRow>
                <PieChartCard cardTitle="Gender" cardLabel="Female" cardValue={props.genderVal} chartType={'donut'} labelData={props.data.labelGenders} seriesData={props.data.seriesGender}></PieChartCard>
                <BarChartCard cardTitle="States" cardLabel="Count" cardValue='5' labelData={props.data.labelStates} seriesData={props.data.seriesStates}></BarChartCard>
            </StyledRow>
            {/* <SparklineCard></SparklineCard> */}
        </div>
    );
}

export default TrendsDashboard;