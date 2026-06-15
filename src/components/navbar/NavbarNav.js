import styled from "styled-components";

const StyledSectionLabel = styled.div`
  display: flex;
  position: absolute;
  top: 5;
  color: white;
  font-size: 1.2rem;
  padding-top: 2rem;
`;

const NavbarNav = function () {
  return <StyledSectionLabel>Dashboards</StyledSectionLabel>;
};

export default NavbarNav;
