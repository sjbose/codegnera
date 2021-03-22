import React, { useState, useEffect } from 'react';
import { Router } from '@reach/router';
import Home from './home';
import About from './about';
import Service from './service';
import Contact from './contact';
import Project from './projects';
import Blog from './blog';

// import { WrapperContainer } from '../styles/Index.elements';
import SEO from '../components/SEO';
import Modal from '../components/Modal';
import { AnimatePresence } from 'framer-motion';

const Index = () => {
    const [showContactModal, setShowContactModal] = useState(false);



    return (
        <>
            <SEO title="Home" description="This is my home page" />
            {/* <Modal showContactModal={showContactModal} setShowContactModal={setShowContactModal} /> */}
            <AnimatePresence exitBeforeEnter>
                <Router>

                    <Home path="/" />
                    <About path="/about"></About>
                    <Service path="/service" />
                    <Project path="/projects" />
                    <Contact path="/contact" />
                    <Blog path="/blog" />

                </Router>
            </AnimatePresence>
        </>
    )
}

export default Index
