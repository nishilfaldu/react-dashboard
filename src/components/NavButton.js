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
    color: #ffffff;
    background-color: #000000
`

const NavButton = function(){
    return(
        <div>
            <StyledButton>Yearly</StyledButton>
        </div>
    );
}

export default NavButton;