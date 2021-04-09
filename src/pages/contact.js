import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../Animation/index';
import { Container, Wrapper, Title, SubTitle } from '../styles/ContactPage.elements'
import ContactFormCTA from '../components/ContactFormCTA'




const Contact = () => {

    return (
        <Container

        >
            <Wrapper as={motion.div}
                variants={fadeUp}
                initial="initialState"
                animate="visible"
                exit="exit">
                <Title>Hey! Tell us about<br></br>your project 👋</Title>
                <SubTitle>Describe the type of service you want</SubTitle>
                <ContactFormCTA />
            </Wrapper>



        </Container>

    )
}

export default Contact;