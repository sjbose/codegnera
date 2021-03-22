import React, { useState } from "react";
import { Navigation, Toggle, Navbox, Hamburger } from '../styles/NavbarComponent.element';
import NavbarLinks from "./NavLinks";
import Logo from "./Logo";
import { motion } from 'framer-motion';
import { fromTopVariants } from "../Animation";



const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    return (
        <Navigation as={motion.nav}
            variants={fromTopVariants}
            initial="initialState"
            animate="visible"
        >
            <Logo />

            <Toggle
                navbarOpen={navbarOpen}
                onClick={() => setNavbarOpen(!navbarOpen)}
            >
                {navbarOpen ? <Hamburger open /> : <Hamburger />}
            </Toggle>
            {navbarOpen ? (
                <Navbox>
                    <NavbarLinks />
                </Navbox>
            ) : (
                <Navbox open>
                    <NavbarLinks />
                </Navbox>
            )}
        </Navigation>
    )
}

export default Navbar