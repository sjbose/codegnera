import React from 'react'
import ImageOne from '../assets/images/VRSaly.svg';
import { Container, ItemOne, ItemTwo, Title, WhitePaper, AboutWrapper } from '../styles/AboutComponent.elements';

const About = () => {
    return (
        <AboutWrapper>
            <Title># About</Title>
            <Container>
                <ItemOne src={ImageOne} alt="Image">

                </ItemOne>
                <ItemTwo>
                    <WhitePaper>
                        <h3>"A little bit about myself</h3>
                        <p>Hi I’m Subhajeet bose a software developer based in kolkata. I'm working as a independent developer  for 5 years.I've done work for companies,consulted for startups and collaborated with talented people to create digital products for both business and consumer use.
                            I love the Web platform and I want to make it better for everyone. And I consider myself to be completely blessed that I get to build it for a living.I have a Bachelor’s Degree in Computer application; but everything I know of and on the Web today is self-taught.
                            I’ve always wanted to study multiple majors because I never wanted to stop learning.
                            I’m grateful that I ended up in a field where one of the major requirements for
                            staying relevant is to continuously keep learning</p>
                    </WhitePaper>

                </ItemTwo>
            </Container>
        </AboutWrapper>
    )
}

export default About
