import React from 'react';
import TrendsDashboard from '../dashboards/TrendsDashboard';
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
import YearlyDashboard from '../dashboards/YearlyDashboard';

const StyledRow = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 1rem;
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
        toRender = <TrendsDashboard></TrendsDashboard>
    }
    else if (data === 'demographics'){
        toRender = <Carousel>
            <CarouselItem src='https://raw.githubusercontent.com/RevolutionUC/revolutionuc-frontend/master/img/revuc-logos/revuc-spring-2014.png' alt='revuc-spring-2014'>
                <YearlyDashboard></YearlyDashboard>
            </CarouselItem>
            <CarouselItem src='https://raw.githubusercontent.com/RevolutionUC/revolutionuc-frontend/master/img/revuc-logos/revuc-fall-2014.png' alt='revuc-fall-2014'>
                <BarChartCard cardTitle="Registrants" cardLabel="Today" cardValue="250"></BarChartCard>
            </CarouselItem>
            <CarouselItem src='https://raw.githubusercontent.com/RevolutionUC/revolutionuc-frontend/master/img/revuc-logos/revuc-spring-2015.png' alt='revuc-spring-2015'>
                <PieChartCard cardTitle="Education" cardLabel="Degrees" cardValue="250" chartType={'pie'}></PieChartCard>
            </CarouselItem>
            <CarouselItem src='https://raw.githubusercontent.com/RevolutionUC/revolutionuc-frontend/master/img/revuc-logos/revuc-spring-2016.png' alt='revuc-spring-2016'>
                <PieChartCard cardTitle="Ethnicities" cardLabel="Count" cardValue="250" chartType={'pie'}></PieChartCard>
            </CarouselItem>
            <CarouselItem src='https://raw.githubusercontent.com/RevolutionUC/revolutionuc-frontend/master/img/revuc-logos/revuc-fall-2016.png' alt='revuc-fall-2016'>
                <BarChartCard cardTitle="Registrants" cardLabel="Today" cardValue="250"></BarChartCard>
            </CarouselItem>
            <CarouselItem src='https://raw.githubusercontent.com/RevolutionUC/revolutionuc-frontend/master/img/revuc-logos/revuc-spring-2017.png' alt='revuc-spring-2017'>
                <PieChartCard cardTitle="Education" cardLabel="Degrees" cardValue="250" chartType={'pie'}></PieChartCard>
            </CarouselItem>
            <CarouselItem src='https://raw.githubusercontent.com/RevolutionUC/revolutionuc-frontend/master/img/revuc-logos/revuc-spring-2018.png' alt='revuc-spring-2018'>
                <PieChartCard cardTitle="Ethnicities" cardLabel="Count" cardValue="250" chartType={'pie'}></PieChartCard>
            </CarouselItem>
            <CarouselItem src='https://raw.githubusercontent.com/RevolutionUC/revolutionuc-frontend/master/img/revuc-logos/revuc-spring-2019.png' alt='revuc-spring-2019'>
                <BarChartCard cardTitle="Registrants" cardLabel="Today" cardValue="250"></BarChartCard>
            </CarouselItem>
            <CarouselItem src='https://raw.githubusercontent.com/RevolutionUC/revolutionuc-frontend/master/img/revuc-logos/revuc-spring-2020.png' alt='revuc-spring-2020'>
                <PieChartCard cardTitle="Education" cardLabel="Degrees" cardValue="250" chartType={'pie'}></PieChartCard>
            </CarouselItem>
            <CarouselItem src='https://raw.githubusercontent.com/RevolutionUC/revolutionuc-frontend/master/img/revuc-logos/revuc-spring-2021.png' alt='revuc-spring-2021'>
                <PieChartCard cardTitle="Ethnicities" cardLabel="Count" cardValue="250" chartType={'pie'}></PieChartCard>
            </CarouselItem>
        </Carousel>
    }
    else if (data === 'education'){
        toRender = <div style={{color: 'white'}}>EDUCATION</div>
    }
    else {
        toRender = <div style={{color: 'white'}}>WELCOME TO THE TRENDS DASHBOARD!</div>
    }

    return(
        <div>
            <StyledRow>
                <Tab onClick={setData} tabButtonAttributes={tabButtonProps}></Tab>
            </StyledRow>
            {toRender}
        </div>
    );
}

export default TrendsPage;