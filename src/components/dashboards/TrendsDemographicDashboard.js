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

const TrendsDemographicDashboard = function(props){
    return(
        <div>
            <StyledRow>
                <div style={{paddingRight: '1rem'}}>
                    <PieChartCard cardTitle="Gender" cardLabel="Female" cardValue='5' chartType={'pie'} labelData={props.data.labelGenders} seriesData={props.data.seriesGender}></PieChartCard>
                </div>
                <div style={{paddingRight: '1rem'}}>
                    <BarChartCard cardTitle="Age" cardLabel="Current" cardValue='18+' labelData={props.data.labelAges} seriesData={props.data.seriesAge}></BarChartCard>
                </div>
                <div>
                    <PieChartCard cardTitle="Ethnicities" cardLabel="Count" cardValue='7' chartType={'pie'} labelData={props.data.labelEthnicities} seriesData={props.data.seriesEthnicities}></PieChartCard>
                </div>
            </StyledRow>

            {/* <StyledRow>
                
                {/* <BarChartCard cardTitle="States" cardLabel="Count" cardValue='5' labelData={props.data.labelStates} seriesData={props.data.seriesStates}></BarChartCard> */}
            {/* </StyledRow> */} 
            {/* <SparklineCard></SparklineCard> */}
        </div>
    );
}

export default TrendsDemographicDashboard;