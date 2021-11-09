import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import theme from "../styling-properties/propSchoolsCard";
import SchoolIcon from '@mui/icons-material/School';

const IconCard = styled.div`
    height: ${(p) => p.theme.cardHeight};
    width: ${(p) => p.theme.cardWidth};
    border-radius: ${(p) => p.theme.cardBorderRadius};
    background: ${(p) => p.theme.colorCardBackground}; 
`

const Label = styled.div`
    color: ${(p) => p.theme.cardLabelColor};
    font-size: ${(p) => p.theme.cardLabelFontSize};
    // padding-right: 1rem;
    // padding-top: 1rem;
`

const Value = styled.div`
    color: ${(p) => p.theme.cardValueColor};
    font-size: ${(p) => p.theme.cardValueFontSize};
    // padding-right: 8rem;
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
    margin: auto;
    padding-top: 1rem;
`

const IconFigureCard = function(){
    return(
        <div>
            <ThemeProvider theme={theme}>
                <IconCard>
                <Div>
                    <div style={{paddingRight: '5rem'}}>    
                        <Label>Schools</Label>
                        <Value>200</Value>
                    </div>
                        <Icon><SchoolIcon sx={{ fontSize: 60, color: 'white' }}></SchoolIcon></Icon>
                </Div>
                </IconCard>
            </ThemeProvider>
        </div>
    );
}

export default IconFigureCard;
