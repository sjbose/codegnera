import React from "react";
import styled from 'styled-components';
import { Link } from "gatsby";
import scrollTo from 'gatsby-plugin-smoothscroll';



// if (typeof window !== "undefined") {
//     // eslint-disable-next-line global-require
//     require("smooth-scroll")('a[href*="#"]')
// }

const NavItem = styled(Link)`

    text-decoration: none;
    color: #403D3C;
    display: inline-block;
    white-space: nowrap;
    margin: 0 0.6vw;
    text-transform:capitalize;
    transition: all 200ms ease-in;
    position: relative;
    font:normal 700 1.1rem/1 'Quicksand', sans-serif;
    :after {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 0%;
        content: ".";
        color: transparent;
        background: goldenrod;
        height: 1px;
        transition: all 0.4s ease-in;
    }

    :hover {
        color: goldenrod;
        ::after {
        width: 100%;
        }
    }

    @media (max-width: 768px) {
        padding: 20px 0;
        font-size: 1.5rem;
        z-index: 6;
    }
`

const NavbarLinks = () => {
    return (
        <>
            <NavItem onClick={() => scrollTo('#home')} to="/#home"  >Home</NavItem>
            <NavItem onClick={() => scrollTo('#about')} to="/#about"    >About</NavItem>
            <NavItem onClick={() => scrollTo('#services')} to="/#services"  >Services</NavItem>
            <NavItem to="/blog/" >Blog</NavItem>
            <NavItem onClick={() => scrollTo('#contact')} to="/#contact"    >Contact</NavItem>
        </>
    )
}

export default NavbarLinks