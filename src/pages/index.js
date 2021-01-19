import React from 'react';
import styled from 'styled-components';
import LandingPage from '../pages/landingPage';
import backgroundImg from '../assets/images/newbg.svg';
import About from './about';
import Skills from './skills';
import ServiceOffered from './service';


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
            <ServiceOffered />
        </WrapperContainer>
    )
}

export default index
