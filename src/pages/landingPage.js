import React from 'react';
import Tilt from 'react-tilt';
import OnRocket from '../assets/images/OnrocketNoBGSVG.svg';
import { BannerImg, Container, TextWrapper, SubDev, tilt } from '../styles/LandingPage.elements';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { animateHome, transition } from '../Animation/index';







const LandingPage = () => {



    return (
        <>
            <SEO title="home">
                <title>WELCOME</title>
            </SEO>
            <motion.div initial="out" animate="in" exit="out" variants={animateHome} transition={transition}>
                <Container id="home">


                    <BannerImg src={OnRocket} alt="banner image" />



                    <TextWrapper>

                        <SubDev>Design, Develop & Create an Identity for your Product</SubDev>
                    </TextWrapper>
                </Container>
            </motion.div>

        </>

    )
}
export default LandingPage;