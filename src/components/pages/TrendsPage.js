import React from 'react';
import TrendsParticipationChart from '../dashboards/TrendsParticipationChart';
import styled from 'styled-components';
import { useState } from 'react';
import Tab from '../menus/Tab';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SchoolIcon from '@mui/icons-material/School';
import Carousel from '../carousel/Carousel';
import CarouselItem from '../carousel/CarouselItem';
import PieChartCard from '../cards/charts/PieChartCard';
import BarChartCard from '../cards/charts/BarChartCard';
import TrendsDemograhicDashboard from '../dashboards/TrendsDemographicDashboard';
import TrendsEducationDashboard from '../dashboards/TrendsEducationDashboard';
import Navbar from '../navbar/Navbar';
import participationData from '../../assets/data/trends/participation';
import demographicData from '../../assets/data/trends/demographic';
import logosData from '../../assets/data/images/logos';
import educationData from '../../assets/data/trends/education';

const StyledRow = styled.div`
    display: flex;
    position: relative;
    top: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;
    padding-left: 15rem;
`

const TrendsPage = function(props){

    const tabButtonProps = {
        forLabel: ['participation', 'demographics', 'education'],
        textLabel: ['Participation', 'Demographics', 'Education'],
        buttonIcon: [<PeopleAltIcon/>, <AnalyticsIcon/>, <SchoolIcon/>]
    };

    const [data, setData] = useState('participation');

    let toRender;
    if (data === 'participation'){
        toRender = <TrendsParticipationChart data={participationData}></TrendsParticipationChart>
    }
    else if (data === 'demographics'){
        toRender = <Carousel>
            {
                Object.keys(logosData).map(
                    (key, index) => {
                        return (<CarouselItem key={index} src={logosData[key]['imgUrl']} alt={logosData[key]['imgAlt']}><TrendsDemograhicDashboard data={demographicData[key]}></TrendsDemograhicDashboard></CarouselItem>);
                    }
                )
            }
        </Carousel>
    }
    else if (data === 'education'){
        toRender = <Carousel>
            {
                Object.keys(logosData).map(
                    (key, index) => {
                        return (<CarouselItem key={index} src={logosData[key]['imgUrl']} alt={logosData[key]['imgAlt']}><TrendsEducationDashboard data={educationData[key]}></TrendsEducationDashboard></CarouselItem>);
                    }
                )
            }
        </Carousel>
    }
    else {
        toRender = <div style={{color: 'white'}}>WELCOME TO THE TRENDS DASHBOARD!</div>
    }

    return(
        <div>
            <Navbar/>
            <StyledRow>
                <Tab onClick={setData} tabButtonAttributes={tabButtonProps}></Tab>
            </StyledRow>
            {toRender}
        </div>
    );
}

export default TrendsPage;