import React from 'react';
import styled from "styled-components";
// import ComputerIcon from '@mui/icons-material/Computer';
import CheckIcon from '@mui/icons-material/Check';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import '../css/TabButton.css'

const TabButton = function(props){
    return(
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <label for='input-1'>
                <input
                type='radio'
                id='input-1'
                name='group'
                />
                <span className='btn'>
                    <span className='btn-icon'><PersonAddAlt1Icon></PersonAddAlt1Icon></span>
                    <span className='btn-text'>Registered</span>
                </span>
            </label>

            <label for='input-2'>
                <input
                type='radio'
                id='input-2'
                name='group'
                />
                <span className='btn'>
                    <span className='btn-icon'><HowToRegIcon></HowToRegIcon></span>
                    <span className='btn-text'>Confirmed</span>
                </span>
            </label>

            <label for='input-3'>
                <input
                type='radio'
                id='input-3'
                name='group'
                />
                <span className='btn'>
                    <span className='btn-icon'><CheckIcon></CheckIcon></span>
                    <span className='btn-text'>Checked In</span>
                </span>
            </label>
        </div>
    );
}

export default TabButton;
