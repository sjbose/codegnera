import React from 'react';

import LandingPage from '../pages/landingPage';
import About from '../components/About';
import ServiceHome from '../components/ServiceHome';
import Contact from '../components/contactHome';
import Project from '../pages/projects';
import SocialMedia from '../components/SocialMedia';
import { Container } from '../styles/home.element';
import SEO from '../components/SEO'





const Home = () => {


    return (

        <Container>
            <SEO title="Welcome"></SEO>


            <LandingPage />
            <Project />
            <ServiceHome />
            <About />
            <SocialMedia />


            <Contact />
        </ Container>

    )
}

export default Home;