import React from 'react';
// import styled from 'styled-components';
import ContactFrom from '../components/ContactFrom';
import { Container, Wrapper, TextWrapper, Title, SubTitle, ContactSally } from '../styles/ContactPage.elements';
import { motion } from 'framer-motion';
import { fadeUp } from '../Animation/index';





const Contact = ({ setShowContactModal }) => {
    return (
        <Container id="contact"
            as={motion.div}
            variants={fadeUp}
            initial="initialState"
            animate="visible"
            exit="exit"
        >
            <TextWrapper>
                <Title># Contact</Title>
                <SubTitle>Have an idea? Tell us about it.</SubTitle>
            </TextWrapper>
            <Wrapper>
                <ContactSally></ContactSally>
                <ContactFrom />
            </Wrapper>
        </Container>

    )
}

export default Contact;
