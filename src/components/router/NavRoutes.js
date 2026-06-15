import { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";
import NavButton from "../buttons/NavButton";
import LivePage from "../pages/LivePage";
import YearlyPage from "../pages/YearlyPage";
import TrendsPage from "../pages/TrendsPage";

// Floating navigation pinned over the sidebar on desktop. On small screens the
// sidebar collapses, so the nav drops into a normal horizontal row at the top.
const Nav = styled.div`
  position: absolute;
  top: 16rem;
  left: 2rem;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 0.75rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media (max-width: 960px) {
    position: static;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const links = [
  { label: "Live", to: "/" },
  { label: "Yearly", to: "/yearly" },
  { label: "Trends", to: "/trends" },
];

const NavRoutes = function () {
  const [activeLink, setActiveLink] = useState("Live");

  return (
    <Router>
      <Nav>
        {links.map(({ label, to }) => (
          <Link key={label} to={to} style={{ textDecoration: "none" }}>
            <NavButton
              label={label}
              checked={activeLink === label}
              setData={setActiveLink}
            />
          </Link>
        ))}
      </Nav>

      <Switch>
        <Route exact path="/" component={LivePage} />
        <Route exact path="/yearly" component={YearlyPage} />
        <Route exact path="/trends" component={TrendsPage} />
      </Switch>
    </Router>
  );
};

export default NavRoutes;
