import React from 'react';
import { motion } from 'framer-motion';
import * as all from '../Animation/index';
import { Container, SocialButton, WhitePaper, TitleContainer, TitleWrapper, Title, SubTitle } from '../styles/SocialMediaComponent.element';



const SocialMedia = ({ setShowContactModal }) => {
    return (
        <Container as={motion.div}
            variants={all.fadeUp}
            initial="initialState"
            animate="visible"
            exit="exit"
        >
            <TitleContainer>
                <TitleWrapper>
                    <Title>Find me on</Title>

                </TitleWrapper>
            </TitleContainer>
            <WhitePaper extraWidth >
                <div className="groupOne">
                    <SocialButton
                        href="https://dribbble.com/KuboO" target="_blank">Dribble</SocialButton>
                    <SocialButton
                        href="https://medium.com/@sj_bose"
                        target="_blank">Medium</SocialButton>
                    <SocialButton
                        href="https://www.behance.net/subhajeetbose"
                        target="_blank">Bechance</SocialButton>
                    <SocialButton
                        href="https://twitter.com/sj_bose"
                        target="_blank">Twitter</SocialButton>
                </div>
                <div className="groupTwo">
                    <SocialButton
                        href="https://in.pinterest.com/subhajeetdoc/_saved/"
                        target="_blank">Pinterest</SocialButton>
                    <SocialButton href="/">Instagram</SocialButton>

                    <SocialButton
                        href="/">Facebook</SocialButton>
                    <SocialButton href="/">Email</SocialButton>
                </div>

            </WhitePaper>
        </Container >


    )
}

export default SocialMedia
