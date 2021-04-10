import React from 'react';

import LandingPage from '../pages/landingPage';
import About from '../components/About';
import ServiceHome from '../components/ServiceHome';
import Contact from '../components/contactHome';
import Project from '../pages/projects';
import SocialMedia from '../components/SocialMedia';
import { Container } from '../styles/home.element';
import SEO from '../components/SEO'





const Home = ({ showModal, setShowModal }) => {


    return (

        <Container>
            <SEO > <title>WELCOME</title></SEO>


            <LandingPage showModal={showModal} setShowModal={setShowModal} />
            <Project />
            <ServiceHome />
            <About />
            <SocialMedia />


            <Contact showModal={showModal} setShowModal={setShowModal} />
        </ Container>

    )
}

export default Home;