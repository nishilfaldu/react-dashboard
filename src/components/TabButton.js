import React from 'react';
import styled from "styled-components";
// import ComputerIcon from '@mui/icons-material/Computer';
import CheckIcon from '@mui/icons-material/Check';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import '../css/TabButton.css'

const TabButton = function(props){
    return(
        <div>
            <label for={props.forLabel}>
                <input
                type='radio'
                id={props.forLabel}
                name='group'
                />
                <span className='btn'>
                    <span className='btn-icon'>{props.buttonIcon}</span>
                    <span className='btn-text'>{props.textLabel}</span>
                </span>
            </label>
        </div>
    );
}

export default TabButton;
