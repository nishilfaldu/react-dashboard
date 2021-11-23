import React from 'react';
import styled from "styled-components";
// import ComputerIcon from '@mui/icons-material/Computer';
import CheckIcon from '@mui/icons-material/Check';
import HowToRegIcon from '@mui/icons-material/HowToReg';


const SpanButton = styled.span`
    positive: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: #ffffff;
    height: 3rem;
    padding: 0;
    border-radius: 2rem;
`

const SpanButtonIcon = styled.span`
    font-size: 1.5rem;
    transition: all 0.35s;
`

const SpanButtonText = styled.span`
    position: absolute;
    left: 0.5rem;
    top: 50%;
    transform: translateY(-50%) translateX(1.25rem);
    // both props below hides an elements
    visibility: hidden;
    opacity: 0;
    font-size: 0.875rem;
    color: #fff;
    transition: all 0.35s;
`

const TabButton = function(props){
    return(
        <div>
            <label for='input-1'>
                <input
                type='radio'
                id='input-1'
                name='group'
                // disappear element by scale(0)
                style={{position: 'absolute',transform: 'scale(0)'}}/>
                <span className='btn'>
                    <span className='btn-icon uil uil-chart'/>
                    <span className='btn-text'>Registered</span>
                </span>
            </label>
        </div>
    );
}

export default TabButton;
