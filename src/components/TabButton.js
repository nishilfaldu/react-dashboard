import React from 'react';
import styled from "styled-components";

const TabButton = function(props){
    return(
        <div>
            <label for='input-1'>
                <input
                type='radio'
                id='input-1'
                name='group'
                />
                <span className='btn'>
                    <span className='btn-icon uil uil-chart'/>
                    <span className='btn-text'>Registered</span>
                </span>
            </label>
        </div>
    );
}

export default TabButton;
