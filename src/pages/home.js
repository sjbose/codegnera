import React, { useState } from 'react';

import LandingPage from '../pages/landingPage';
import About from '../components/About';
import ServiceOffered from '../pages/service';
import Contact from '../pages/contact';
import Project from '../pages/projects';
import { motion } from 'framer-motion';
import { fadeUp } from '../Animation/index';
import SocialMedia from '../components/SocialMedia';
import { Container } from '../styles/home.element';






const Home = () => {


    return (


        <Container as={motion.div}
            variants={fadeUp}
            initial="initialState"
            animate="visible"
            exit="exit"

        >
            <LandingPage />
            <Project />
            <ServiceOffered />
            <About />
            <SocialMedia />


            <Contact />
        </ Container>

    )
}

export default Home;
