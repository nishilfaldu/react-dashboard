import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../themes/propNavButton";

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${(p) => p.theme.buttonHeight};
    width: ${(p) => p.theme.buttonWidth};
    border-radius: ${(p) => p.theme.borderRadius};
    font-size: ${(p) => p.theme.buttonLabelFontSize};
    color: ${(p) => p.theme.colorTitle};
    background: ${(p) => p.active ? `#867c48` : p.theme.colorButtonBackground};
    border: ${(p) => p.theme.buttonBorder};
    cursor: ${(p) => p.theme.buttonCursorProperty};
`

const NavButton = function(props){

    const handleClick = function(){
        props.setData(props.label);
    };

    return(
        <div>
            <ThemeProvider theme={theme}>
                <StyledButton onClick={handleClick} active={props.checked}>{props.label}</StyledButton>
            </ThemeProvider>
        </div>
    );
}

export default NavButton;