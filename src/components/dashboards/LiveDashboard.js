import styled from 'styled-components';
import PieChartCard from '../cards/charts/PieChartCard';
import BarChartCard from '../cards/charts/BarChartCard';
import { useState } from 'react';

const StyledRow = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 1rem;
`

const LiveDashboard = function(props){
    return(
        <div>
            <StyledRow>
                <PieChartCard cardTitle="Ethnicities" cardLabel="Count" cardValue={props.ethnicityVal} chartType={'pie'}></PieChartCard>
                <BarChartCard cardTitle="Countries" cardLabel="Count" cardValue={props.countriesVal}></BarChartCard>
                <PieChartCard cardTitle="Education Levels" cardLabel="Degrees" cardValue={props.degreesVal} chartType={'pie'}></PieChartCard>
            </StyledRow>

            <StyledRow>
                <BarChartCard cardTitle="Majors" cardLabel="Count" cardValue={props.majorsVal}></BarChartCard>
                <PieChartCard cardTitle="Gender" cardLabel="Female" cardValue={props.genderVal} chartType={'donut'}></PieChartCard>
                <BarChartCard cardTitle="Hackathon Experience" cardLabel="Count" cardValue={props.hackExperienceVal}></BarChartCard>
            </StyledRow>
            {/* <SparklineCard></SparklineCard> */}
        </div>
    );
}

export default LiveDashboard;