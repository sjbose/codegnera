import React from 'react';
import { graphql } from 'gatsby';
import Img from "gatsby-image/withIEPolyfill";
import { Container, ProfilePic, TextWrapper, WhitePaper, AboutCloud } from '../styles/AboutPage.elements';
import Skill from '../pages/skills';
import { ImportantData } from '../data/about';
import ImportanceOfWebApp from '../components/ImportanceOfWebApp';
import Cloud from '../assets/images/aboutCloud.svg';
import SocialMedia from '../components/SocialMedia';
import { motion } from 'framer-motion';
import { fadeUp } from '../Animation/index';
import SEO from '../components/SEO'


export const data = graphql`
            query aboutMe {
            contentfulAuthor(name: {eq: "Subhajeet Bose(SJ)"}) {
                id
                name
                subtitle
                title
                profession
                about {
                about
                }
                photo {
                fluid( maxHeight: 200, maxWidth: 200, quality: 100) {
                    ...GatsbyContentfulFluid
                }
                }
            }
            }

    `



const about = (props) => {



    return (

        <Container>
            <SEO title="about"></SEO>
            <AboutCloud src={Cloud} alt="images" />

            <ProfilePic
                as={motion.div}
                variants={fadeUp}
                initial="initialState"
                animate="visible"
                exit="exit"
            >
                <Img
                    className="profileImg"
                    fluid={props.data.contentfulAuthor.photo.fluid}
                    alt="aboutMe"
                />
                {/* <h5>{props.data.contentfulAuthor.name}</h5>
                <p>{props.data.contentfulAuthor.profession}</p> */}

            </ProfilePic>


            <WhitePaper
                as={motion.div}
                variants={fadeUp}
                initial="initialState"
                animate="visible"
                exit="exit"
            >
                <TextWrapper>
                    <h3>{props.data.contentfulAuthor.subtitle}</h3>
                    <p>{props.data.contentfulAuthor.about.about}</p>
                </TextWrapper>
            </WhitePaper>


            <Skill />

            <ImportanceOfWebApp {...ImportantData} />
            <SocialMedia />

        </Container>

    )
}

export default about;
