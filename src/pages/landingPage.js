import React, { useEffect } from 'react';
import ReactTooltip from "react-tooltip";
// import Tilt from 'react-tilt';
import OnRocket from '../assets/images/OnrocketNoBGSVG.svg';
import RedMoonImg from '../assets/images/redMoon.svg';
import BlobLImg from '../assets/images/c.svg';
import BlobSImg from '../assets/images/b.svg';
import { BannerImg, Container, TextWrapper, SubDev, RadiatingBtn, RadiatingBtnLink, BlobL, BlobS, RedMoon } from '../styles/LandingPage.elements';
import SEO from '../components/SEO';

import { motion } from 'framer-motion';
import { radiatingBtnOnHover } from '../Animation/index';
import arrow from '../assets/images/right-arrow.svg';



const LandingPage = () => {


    return (
        <>
            <SEO title="home">
                {/* <title>WELCOME</title> */}
            </SEO>

            <Container id="home">


                <BannerImg src={OnRocket} alt="banner image" />
                <div className="bannerImgs">
                    <RedMoon src={RedMoonImg} alt="image" />

                    <BlobL
                        as={motion.img} src={BlobSImg} alr="image"
                        animate={{ rotate: 360 }}
                        transition={{

                            repeat: 3,
                            duration: 90,
                            repeatType: "mirror",
                        }}
                        src={BlobLImg} alt="image" />

                    <BlobS as={motion.img} src={BlobSImg} alr="image"
                        animate={{ rotate: 360 }}
                        transition={{

                            repeat: 3,
                            duration: 80,
                            repeatType: "mirror",
                        }}
                    />


                </div>


                <TextWrapper>

                    <SubDev>Design, Develop & Create an Identity for your Product</SubDev>
                    <RadiatingBtn data-tip="Find my works">
                        <motion.div className="circleEmit"
                            variants={radiatingBtnOnHover}
                            whileHover="onHover"
                            transition="transition"
                        >
                            <RadiatingBtnLink to="/projects" >
                                <img src={arrow} alt="next" />

                            </RadiatingBtnLink>
                            <ReactTooltip place="right" >
                                <h1>Find my work</h1>
                                <RadiatingBtnLink to="/contact">
                                    <img src={arrow} alt="next" />

                                </RadiatingBtnLink>
                            </ReactTooltip>
                            <div className="circleWave" style={{ animationDelay: '0s' }}
                            ></div>
                            <div className="circleWave" style={{ animationDelay: '1s' }}
                            ></div>
                            <div className="circleWave" style={{ animationDelay: '2s' }}
                            ></div>


                        </motion.div>

                    </RadiatingBtn>


                </TextWrapper>
            </Container>


        </>

    )
}
export default LandingPage;