import React, { useState } from 'react';
import { Router } from '@reach/router';
import Home from './home';
import About from './about';
import Service from './service';
import Contact from './contact';
import Project from './projects';
import Blog from './blog';
import SEO from '../components/SEO';




const Index = () => {

    return (

        <>
            <SEO title="Home" description="This is my home page" />





            <Router>
                <Home path="/" />

                <About path="/about" />
                <Service path="/service" />
                <Project path="/projects" />
                <Contact path="/contact" />
                <Blog path="/blog" />
            </Router>



        </>
    )
}

export default Index