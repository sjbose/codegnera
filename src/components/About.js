import React from 'react'
import ImageOne from '../assets/images/VRSaly.svg';
import { Container, ItemOne, ItemTwo, Title, WhitePaper, AboutWrapper, WrapperImg } from '../styles/AboutComponent.elements';

const About = () => {
    return (
        <AboutWrapper>
            <Title># About</Title>
            <Container>
                <WrapperImg>
                    <ItemOne src={ImageOne} alt="Image"></ItemOne>
                </WrapperImg>



                <ItemTwo>
                    <WhitePaper>
                        <h3>"A little bit about myself</h3>
                        <p>Hi I’m Subhajeet bose a software developer based in kolkata. I'm working as an independent developer for  6 years.I've done work for companies,consulted for startups and collaborated with talented people to create digital products for both business and consumer use. I love the Web platform and I tried to make it better for everyone.I consider myself to be completely blessed that I get to build it for a living.I have a Bachelor’s Degree in Computer application, but everything I know of and on the Web today is self-taught. I love to learn new technology, I never wanted to stop learning. And I’m grateful that I ended up in a field where one of the major requirements for staying relevant is to continuously keep learning.</p>
                    </WhitePaper>

                </ItemTwo>
            </Container>
        </AboutWrapper>
    )
}

export default About
