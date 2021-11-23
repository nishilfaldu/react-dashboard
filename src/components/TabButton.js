import React from 'react';
import styled from "styled-components";
// import ComputerIcon from '@mui/icons-material/Computer';
import CheckIcon from '@mui/icons-material/Check';
import HowToRegIcon from '@mui/icons-material/HowToReg';

const TabButton = function(props){
    return(
        <div styled={{backgroundColor: '#FF0000'}}>
            <label for='input-1'>
                <input
                type='radio'
                id='input-1'
                name='group'
                />
                <span className='btn'>
                    <span className='btn-icon'/>
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
                    <span className='btn-icon'/>
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
                    <span className='btn-icon'/>
                    <span className='btn-text'>Checked In</span>
                </span>
            </label>
        </div>
    );
}

export default TabButton;
