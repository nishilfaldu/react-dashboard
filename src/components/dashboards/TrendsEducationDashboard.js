import React from 'react';
// import LineChartCard from '../cards/charts/LineChartCard'; 
import styled from 'styled-components';
import BarChartCard from '../cards/charts/BarChartCard';
import PieChartCard from '../cards/charts/PieChartCard';

const StyledRow = styled.div`
    display: flex;
    justify-content: space-between;
    // padding-bottom: 1rem;
    padding-left: 15rem;
    padding-top: 3rem;
    // height: 15rem;
`

const TrendsEducationDashboard = function(props){
    return(
        <div>
            <StyledRow>
                <div style={{paddingRight: '1rem'}}>
                    <PieChartCard cardTitle="Degrees" cardLabel="Count" cardValue='4' chartType={'pie'} labelData={props.data.labelDegrees} seriesData={props.data.seriesDegrees}></PieChartCard>
                </div>
                <div style={{paddingRight: '1rem'}}>
                    <BarChartCard cardTitle="Hackathon Experience" cardLabel="Count" cardValue='250' labelData={props.data.hackExperience} seriesData={props.data.seriesHackExperience}></BarChartCard>
                </div>
                <div>
                    <PieChartCard cardTitle="Majors" cardLabel="Count" cardValue='4' chartType={'pie'} labelData={props.data.labelMajors} seriesData={props.data.seriesMajors}></PieChartCard>
                </div>
            </StyledRow>

            {/* <StyledRow>
                
                {/* <BarChartCard cardTitle="States" cardLabel="Count" cardValue='5' labelData={props.data.labelStates} seriesData={props.data.seriesStates}></BarChartCard> */}
            {/* </StyledRow> */} 
            {/* <SparklineCard></SparklineCard> */}
        </div>
    );
}

export default TrendsEducationDashboard;