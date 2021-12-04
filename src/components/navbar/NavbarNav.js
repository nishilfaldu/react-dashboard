import React from 'react';
import styled, { css } from "styled-components";
// import { rgba } from "polished";
// import NavRoutes from '../router/NavRoutes';
import NavRoutes from '../router/NavRoutes';
import NavButton from '../buttons/NavButton';


const StyledWrapper = styled.div`
    flex: 0 1 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: auto;
`

const StyledSectionLabel = styled.div`
    display: flex;
    position: absolute;
    top: 5;
    color: white;
    font-size: 1.2rem;
    padding-top: 2rem;
`

const NavbarNav = function(props){

    return(
        <div>
            <StyledSectionLabel>Dashboards</StyledSectionLabel>
            {/* <NavRoutes></NavRoutes> */}
        </div>
    );
};  

export default NavbarNav;