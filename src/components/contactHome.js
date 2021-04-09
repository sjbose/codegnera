import React from 'react';

import { Container, Wrapper, TextWrapper, Title, SubTitle, ContactSally, ChatButton } from '../styles/ContactHome.elements';
import { motion } from 'framer-motion';
import { fadeUp } from '../Animation/index';






const Contact = () => {


    return (
        <Container
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
                    <SubTitle>let me help you to build a<br />strong online presence</SubTitle>
                    <h3>Have any query?</h3>
                    <ChatButton to="/contact">LET'S TALK</ChatButton>
                </TextWrapper>
                <ContactSally />

            </Wrapper>



        </Container>

    )
}

export default Contact;