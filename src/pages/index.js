import React from 'react';
import styled from 'styled-components';
import LandingPage from '../pages/landingPage';
import backgroundImg from '../assets/images/newbg.svg';
// import backgroundImg from '../assets/images/bgblue.svg';
import About from './about2';
import Skills from './skills';
// import ServiceOffered from './service';
// import Contact from './contact';
// import Project from './projects';


const WrapperContainer = styled.div`
    background:url(${backgroundImg});
    // background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const index = () => {

    return (
        <WrapperContainer>

            <LandingPage />
            <About />
            <Skills />
            {/* <ServiceOffered /> */}
            {/* <Project /> */}
            {/* <Contact /> */}

        </WrapperContainer>
    )
}

export default index
