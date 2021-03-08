import React from 'react';

import LandingPage from '../pages/landingPage';
import About from '../components/About';
import ServiceOffered from '../pages/service';
import Contact from '../pages/contact';
import Project from '../pages/projects';
import { motion } from 'framer-motion';
import { pageTransitionVariants, fadeUp } from '../Animation/index';
// import Blog from './blog';
const home = () => {
    return (
        <motion.div
            variants={fadeUp}
            initial="initialState"
            animate="visible"
            exit="exit"
        >
            <LandingPage />
            <About />
            <ServiceOffered />
            <Project />
            <Contact />
        </motion.div>
    )
}

export default home;
