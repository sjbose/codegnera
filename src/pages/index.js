import React, { useState } from 'react';
import { Router } from '@reach/router';
import Home from './home';
import About from './about';
import Service from './service';
import Contact from './contact';
import Project from './projects';
import Blog from './blog';
import SEO from '../components/SEO';
import Modal from '../components/Modal';



const Index = () => {
    const [showModal, setShowModal] = useState(false);


    const closeModal = () => {
        setShowModal(false);
    };
    return (

        <>
            <SEO title="Home" description="This is my home page" />



            <Modal showModal={showModal} closeModal={closeModal} />


            <Router>
                <Home path="/" showModal={showModal} setShowModal={setShowModal} />

                <About path="/about" />
                <Service path="/service" />
                <Project path="/projects" />
                <Contact path="/contact" showModal={showModal} setShowModal={setShowModal} />
                <Blog path="/blog" />
            </Router>







        </>
    )
}

export default Index