import React from 'react';
import { Router } from '@reach/router';

// import backgroundImg from '../assets/images/newbg.svg';
// import backgroundImg from '../assets/images/bgblue.svg';
import Home from './home';
import About from './about';

// import Skills from './skills';
import Service from './service';

import Contact from './contact';
import Project from './projects';

import Blog from './blog';

// import { WrapperContainer } from '../styles/Index.elements';
import SEO from '../components/SEO';



const index = () => {



    return (
        <>
            <SEO title="Home" description="This is my home page" />
            <Router>
                <Home path="/" />
                <About path="/about"></About>
                <Service path="/service" />
                <Project path="/projects" />
                <Contact path="/contact" />
                <Blog path="/blog" />

            </Router>

        </>
    )
}

export default index
