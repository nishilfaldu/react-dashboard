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
            <CarouselItem src='https://raw.githubusercontent.com/RevolutionUC/revolutionuc-frontend/master/img/revuc-logos/revuc-spring-2014.png' alt='revuc-spring-2014'>Item 1</CarouselItem>
            <CarouselItem src='https://raw.githubusercontent.com/RevolutionUC/revolutionuc-frontend/master/img/revuc-logos/revuc-fall-2014.png' alt='revuc-fall-2014'>Item 2</CarouselItem>
            <CarouselItem>Item 3</CarouselItem>
            <CarouselItem>Item 4</CarouselItem>
            <CarouselItem>Item 5</CarouselItem>
            <CarouselItem>Item 6</CarouselItem>
            <CarouselItem>Item 7</CarouselItem>
            <CarouselItem>Item 8</CarouselItem>
            <CarouselItem>Item 9</CarouselItem>
            <CarouselItem>Item 10</CarouselItem>
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