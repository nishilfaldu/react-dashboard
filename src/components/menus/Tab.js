import React from 'react';
import styled from 'styled-components';
import CheckIcon from '@mui/icons-material/Check';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import TabButton from '../buttons/TabButton';

const StyledTabRow = styled.div`
    display: flex;
    justify-content: space-between;
`

const Tab = function(props){
    return(
        <div>
            <StyledTabRow>
                <TabButton forLabel='registered' textLabel='Registered' buttonIcon={<PersonAddAlt1Icon/>} onClickDoThis={props.onClick}></TabButton>
                <TabButton forLabel='confirmed' textLabel='Confirmed' buttonIcon={<HowToRegIcon/>} onClickDoThis={props.onClick}></TabButton>
                <TabButton forLabel='checkedin' textLabel='Checked In' buttonIcon={<CheckIcon/>} onClickDoThis={props.onClick}></TabButton>
            </StyledTabRow>
        </div>
    );
}   

export default Tab;