import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { rgba } from "polished";

const StyledWrapper = styled.div`
    display: flex;
    position: absolute;
    z-index: 2;
    flex: 0 1 auto;
    background: #1B1B1B;
    box-shadow: 0 0 10px ${rgba("black", 0.2)};
    height: 40rem;
    width: 15rem;
`

const StyledBackground = styled.div`
    display: flex;
    // padding-top: 3rem;
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    width: 15rem;
    height: 6.5rem;
    background: #867c48;
`

const StyledLink = styled(Link)`
    width: 100%;
    padding-left: 1.5rem;
    padding-top: 1.5rem;
`

const StyledDiv = styled(Link)`
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
            {/* <StyledLink to='/'> */}
            <StyledDiv>
                <StyledSvgBackground>
                    <img src='https://raw.githubusercontent.com/RevolutionUC/revolutionuc-frontend/master/img/revuc-logos/revuc-spring-2014.png' alt='revuc-spring-2014' style={{ width: '8rem', height: '8rem' }}/>
                </StyledSvgBackground>
            </StyledDiv>
            {/* </StyledLink> */}
        </StyledWrapper>
    );
}

export default NavbarLogo;