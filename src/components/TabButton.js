import React from 'react';
import styled from "styled-components";
import ComputerIcon from '@mui/icons-material/Computer';


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
                <SpanButton>
                {/* <span className='btn'> */}
                    <span className='btn-icon uil uil-chart'/>
                    <span className='btn-text'>Registered</span>
                {/* </span> */}
                </SpanButton>
            </label>
        </div>
    );
}

export default TabButton;
