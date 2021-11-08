import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import theme from "../styling-properties/propSchoolsCard";

const Card = styled.div`
    height: ${(p) => p.theme.cardHeight}
    width: ${(p) => p.theme.cardWidth}
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: ${(p) => p.theme.cardBorderRadius};
    background: ${(p) => p.theme.cardColorBackground};
`

const Label = styled.div`
    color: ${(p) => p.theme.labelColor};
    font-size: ${(p) => p.theme.labelFontSize};
`

const Value = styled.div`
    color: ${(p) => p.theme.valueColor};
    font-size: ${(p) => p.theme.valueFontSize};
`

const Icon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    border-raidus: ${(p) => p.theme.borderRadiusIcon};
`

const IconFigureCard = function(){
    return(
        <Card>
            <Label></Label>
            <Label></Label>
            <Icon></Icon>
        </Card>
    );
}

export default IconFigureCard;
