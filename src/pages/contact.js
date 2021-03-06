import React from 'react';
// import styled from 'styled-components';
import ContactFrom from '../components/ContactFrom';
import { Container, Wrapper, TextWrapper, Title, SubTitle, ContactSally } from '../styles/ContactPage.elements';






const contact = () => {
    return (
        <Container id="contact">
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

export default contact;
