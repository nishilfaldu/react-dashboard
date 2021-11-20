import react from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 10rem;
    border-radius: 1rem;
    font-size: 1rem;
    font-family: "Poppins";
    color: white;
    background-color: black;
`

const NavButton = function(props){
    return(
        <div>
            <StyledButton>{props.label}</StyledButton>
        </div>
    );
}

export default NavButton;