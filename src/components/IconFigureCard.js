import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import theme from "../styling-properties/propSchoolsCard";

const IconCard = styled.div`
    height: ${(p) => p.theme.cardHeight};
    width: ${(p) => p.theme.cardWidth};
    border-radius: ${(p) => p.theme.cardBorderRadius};
    background: ${(p) => p.theme.colorCardBackground}; 
`

const Label = styled.div`
    color: ${(p) => p.theme.cardLabelColor};
    font-size: ${(p) => p.theme.cardLabelFontSize};
    padding-right: 10rem;
    padding-top: 1rem;
`

const Value = styled.div`
    color: ${(p) => p.theme.cardValueColor};
    font-size: ${(p) => p.theme.cardValueFontSize};
    padding-right: 10rem;
`

const Icon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    border-raidus: ${(p) => p.theme.borderRadiusIcon};
`

const IconFigureCard = function(){
    return(
        <div>
            <ThemeProvider theme={theme}>
                <IconCard>
                    <Label>Schools</Label>
                    <Value>200</Value>
                    <Icon></Icon>
                </IconCard>
            </ThemeProvider>
        </div>
    );
}

export default IconFigureCard;
