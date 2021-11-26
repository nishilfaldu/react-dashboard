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
                <TabButton forLabel='input-1' textLabel='Registered' buttonIcon={<PersonAddAlt1Icon/>} onClickDoThis={props.onClick}></TabButton>
                <TabButton forLabel='input-2' textLabel='Confirmed' buttonIcon={<HowToRegIcon/>} onClickDoThis={props.onClick}></TabButton>
                <TabButton forLabel='input-3' textLabel='Checked In' buttonIcon={<CheckIcon/>} onClickDoThis={props.onClick}></TabButton>
            </StyledTabRow>
        </div>
    );
}   

export default Tab;