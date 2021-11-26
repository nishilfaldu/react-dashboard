import React from 'react';
import '../../assets/css/TabButton.css';

const TabButton = function(props){
    return(
        <div>
            <label htmlFor={props.forLabel}>
                <input
                type='radio'
                id={props.forLabel}
                name='group'
                />
                <span className='btn' onClick={()=>props.onClickDoThis(props.forLabel)}>
                    <span className='btn-icon'>{props.buttonIcon}</span>
                    <span className='btn-text'>{props.textLabel}</span>
                </span>
            </label>
        </div>
    );
}

export default TabButton;
