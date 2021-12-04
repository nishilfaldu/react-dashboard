import React from 'react';
import styled, { css } from "styled-components";
import { rgba } from "polished";

const StyledWrapper = styled.div`
    flex: 0 1 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: auto;
`

const StyledSectionLabel = styled.div`
    // display: flex;
    z-index: 3;
    color: rgba("white", 0.57);
`

const NavMenu = function(props){

    return(
        <div>
            <StyledSectionLabel>Dashboards</StyledSectionLabel>
        </div>
    );
};  

export default NavMenu;