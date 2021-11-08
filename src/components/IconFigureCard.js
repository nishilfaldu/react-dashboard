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

const IconFigureCard = function(){
    return(
        <div>
            <ThemeProvider theme={theme}>
                <Card>
                    <Label>Hello World</Label>
                    <Value>20</Value>
                    <Icon></Icon>
                </Card>
            </ThemeProvider>
        </div>
    );
}

export default IconFigureCard;
