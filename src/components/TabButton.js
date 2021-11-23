import React from 'react';
import styled from "styled-components";

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

const TabButton = function(props){
    return(
        <div>
            <label for='input-1'>
                <input
                type='radio'
                id='input-1'
                name='group'
                />
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
