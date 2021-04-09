import React from "react";
import styled from 'styled-components';
import { Link } from "gatsby";
// import { Link } from "@reach/router";



const NavItem = styled(Link)`

    text-decoration: none;
    color: #403D3C;
    display: inline-block;
    white-space: nowrap;
    margin: 0 0.6vw;
    text-transform:capitalize;
    transition: all 0.5s ease-in;
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
    &.active{
        color: goldenrod;
        text-decoration: underline;
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


            <NavItem to="/" activeClassName="active">Home</NavItem>
            <NavItem to="/about" activeClassName="active">About</NavItem>
            <NavItem to="/service" activeClassName="active">Services</NavItem>
            <NavItem to="/projects" activeClassName="active">Work</NavItem>
            <NavItem to="/contact" activeClassName="active">Contact</NavItem>
            {/* <NavItem to="/blog" activeClassName="active">Blog</NavItem> */}





        </>
    )
}

export default NavbarLinks