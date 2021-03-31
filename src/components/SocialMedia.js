import React from 'react';
import { motion } from 'framer-motion';
import * as all from '../Animation/index';
import { Container, SocialButton, WhitePaper, TitleContainer, TitleWrapper, Title } from '../styles/SocialMediaComponent.element';



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
                    <SocialButton className="dribble"
                        href="https://dribbble.com/KuboO" target="_blank">Dribble</SocialButton>
                    <SocialButton className="pinterest"
                        href="https://in.pinterest.com/subhajeetdoc/_saved/"
                        target="_blank">Pinterest</SocialButton>

                    <SocialButton className="behance"
                        href="https://www.behance.net/subhajeetbose"
                        target="_blank">Bechance</SocialButton>

                </div>
                <div className="groupTwo">

                    <SocialButton className="instagram" href="/">Instagram</SocialButton>

                    <SocialButton className="medium"
                        href="https://medium.com/@sj_bose"
                        target="_blank">Medium</SocialButton>
                    <SocialButton className="twitter"
                        href="https://twitter.com/sj_bose"
                        target="_blank">Twitter</SocialButton>
                </div>

            </WhitePaper>
        </Container >


    )
}

export default SocialMedia
