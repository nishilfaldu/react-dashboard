import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledWrapper = styled.div`
    display: none;
    position: relative;
    z-index: 2;
    flex: 0 1 auto;
`

const StyledBackground = styled.div`
    display: none;
    position: absolute;
    z-index: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: red;
`

const StyledLink = styled(Link)`
    width: 100%;
`

const StyledSvgBackground = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: red;
    position: relative;
    z-index: 1;
    border-radius: 2rem;
    width: 2rem;
    height: 2rem;
`

const NavbarLogo = function(props){
    return(
        <StyledWrapper>
            <StyledBackground/>
            <StyledLink to='/'/>
            <StyledSvgBackground>
                <img src='https://raw.githubusercontent.com/RevolutionUC/revolutionuc-frontend/master/img/revuc-logos/revuc-spring-2014.png' alt='revuc-spring-2014'></img>
            </StyledSvgBackground>
        </StyledWrapper>
    );
}

export default NavbarLogo;