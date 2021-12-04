import React from "react";
import styled from "styled-components";
import NavbarLogo from "../navbar/NavbarLogo";
import NavbarNav from "../navbar/NavbarNav";

const Navbar = function(props){
    return(
        <div>
            <NavbarLogo></NavbarLogo>
            {/* <NavbarNav></NavbarNav> */}
        </div>
    );
}

export default Navbar;