import React from 'react';

import { Container, Wrapper, TextWrapper, Title, SubTitle, ContactSally, ChatButton } from '../styles/ContactPage.elements';
import { motion } from 'framer-motion';
import { fadeUp } from '../Animation/index';






const Contact = ({ showModal, setShowModal }) => {

    const openModal = () => {
        setShowModal(true);
    };
    return (
        <Container id="contact"
            as={motion.div}
            variants={fadeUp}
            initial="initialState"
            animate="visible"
            exit="exit"
        >
            <Wrapper>
                <TextWrapper>
                    <Title>Share your<br></br>
                        idea 👋</Title>
                    <SubTitle>let me help you to build<br /> your online presence strong</SubTitle>
                    <ChatButton onClick={openModal}>LET'S TALK</ChatButton>
                </TextWrapper>
                <ContactSally />

            </Wrapper>



        </Container>

    )
}

export default Contact;