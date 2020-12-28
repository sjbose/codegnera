import React from "react";
import styled from 'styled-components';
import { Link } from "gatsby";


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
            <NavItem to="/">Home</NavItem>
            <NavItem to="/">About</NavItem>
            <NavItem to="/404">Services</NavItem>
            <NavItem to="/">Blog</NavItem>
            <NavItem to="/404">Contact</NavItem>
        </>
    )
}

export default NavbarLinks