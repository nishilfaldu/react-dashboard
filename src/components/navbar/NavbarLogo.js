import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { rgba } from "polished";
import NavbarNav from './NavbarNav';

const StyledWrapper = styled.div`
    position: absolute;
    z-index: 2;
    flex: 0 1 auto;
    background: #1B1B1B;
    box-shadow: 0 0 10px ${rgba("black", 0.2)};
    height: 100%;
    width: 15rem;
`

const StyledBackground = styled.div`
    display: flex;
    position: absolute;
    z-index: 0;
    left: 0;
    top: -1rem;
    width: 15rem;
    height: 6.5rem;
    background: #867c48;
`

const StyledLink = styled(Link)`
    width: 100%;
    padding-left: 1.5rem;
    padding-top: 1.5rem;
`

const StyledDiv = styled.div`
    width: 100%;
    padding-left: 1.5rem;
    padding-top: 1.5rem;
`

const StyledSvgBackground = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(41, 42, 42);
    position: relative;
    z-index: 1;
    border-radius: 1.5rem;
    width: 12rem;
    height: 10rem;
`

const NavbarLogo = function(props){
    return(
        <StyledWrapper>
            <StyledBackground/>
            <StyledDiv>
                <StyledSvgBackground>
                    <img src='https://assets.revolutionuc.com/logo-256.png' alt='revuc-spring-2021' style={{ width: '8rem', height: '8rem' }}/>
                </StyledSvgBackground>

                <NavbarNav></NavbarNav>
            </StyledDiv>
        </StyledWrapper>
    );
}

export default NavbarLogo;