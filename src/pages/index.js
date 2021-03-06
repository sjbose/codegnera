import React from 'react';
import Home from './home';
// import backgroundImg from '../assets/images/newbg.svg';
// import backgroundImg from '../assets/images/bgblue.svg';

import About from './about';
// import Skills from './skills';
import ServiceOffered from './service';
import Contact from './contact';
import Project from './projects';
// import Blog from './blog';

import { WrapperContainer } from '../styles/Index.elements';
import SEO from '../components/SEO';






const index = () => {



    return (
        <>
            <SEO />
            <WrapperContainer>

                <Home />
                <About />
                {/* <Skills /> */}
                <ServiceOffered />
                <Project />
                <Contact />
            </WrapperContainer>
        </>
    )
}

export default index
