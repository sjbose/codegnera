import React from "react";
import styled from 'styled-components';
import { Link } from "gatsby";
// import { Link } from "@reach/router";
// import scrollTo from 'gatsby-plugin-smoothscroll';
import { motion, AnimatePresence } from "framer-motion";




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



            <AnimatePresence>
                <NavItem to="/">Home</NavItem>
                <NavItem to="/about" >About</NavItem>
                <NavItem to="/service">Services</NavItem>
                <NavItem to="/projects">Work</NavItem>
                <NavItem to="/contact" >Contact</NavItem>
                <NavItem to="/blog" >Blog</NavItem>
            </AnimatePresence>




        </>
    )
}

export default NavbarLinks