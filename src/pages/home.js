import React from 'react';

import LandingPage from '../pages/landingPage';
import About from '../components/About';
import ServiceOffered from '../pages/service';
import Contact from '../pages/contact';
import Project from '../pages/projects';
import SocialMedia from '../components/SocialMedia';
import { Container } from '../styles/home.element';






const Home = ({ showModal, setShowModal }) => {


    return (

        <Container>
            <LandingPage showModal={showModal} setShowModal={setShowModal} />
            <Project />
            <ServiceOffered />
            <About />
            <SocialMedia />


            <Contact showModal={showModal} setShowModal={setShowModal} />
        </ Container>

    )
}

export default Home;