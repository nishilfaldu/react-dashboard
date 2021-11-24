import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import theme from "../../themes/propIconCard";

const IconCard = styled.div`
    height: ${(p) => p.theme.cardHeight};
    width: ${(p) => p.theme.cardWidth};
    border-radius: ${(p) => p.theme.cardBorderRadius};
    background: ${(p) => p.theme.colorCardBackground}; 
`

const Label = styled.div`
    color: ${(p) => p.theme.cardLabelColor};
    font-size: ${(p) => p.theme.cardLabelFontSize};
`

const Value = styled.div`
    color: ${(p) => p.theme.cardValueColor};
    font-size: ${(p) => p.theme.cardValueFontSize};
`

const Icon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    border-raidus: ${(p) => p.theme.borderRadiusIcon};
`

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
`

const IconFigureCard = function(props){
    return(
        <div>
            <ThemeProvider theme={theme}>
                <IconCard>
                <Div>
                    <div style={{paddingRight: '5rem'}}>    
                        <Label>{props.cardTitle}</Label>
                        <Value>{props.cardValue}</Value>
                    </div>
                        <Icon>{props.Icon}</Icon>
                </Div>
                </IconCard>
            </ThemeProvider>
        </div>
    );
}

export default IconFigureCard;
