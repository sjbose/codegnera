import React from 'react';
import Img from "gatsby-image/withIEPolyfill";
import { useStaticQuery, graphql } from 'gatsby';
import { fadeUp } from '../Animation/index';
import { WhitePaper, Service, SubPara, Title, SubTitle, TitleWrapper, TitleContainer, ServiceWrapper } from '../styles/ServicePage.elements';
import { motion } from 'framer-motion'




const container = {
    initialState: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {

            delayChildren: 5
        }
    }
};

const item = {
    initialState: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const ServiceOffered = () => {

    const data = useStaticQuery(
        graphql`
    query {
    allContentfulService {
        edges {
        node {
            name
            description
            id
            slug
            image {
            title
            fluid(maxWidth: 300, maxHeight: 200, quality: 100) {
                ...GatsbyContentfulFluid
        }
            }
            mainService
        }
        }
    }
    }
`
    );




    console.log(data);



    return (
        <motion.div
            variants={fadeUp}
            initial="initialState"
            animate="visible"
            exit="exit"
        >
            <TitleContainer>
                <TitleWrapper>
                    <Title># Services</Title>
                    <SubTitle>
                        Type of services provided
                    </SubTitle>
                    <SubPara>Build your the unique ideas by converting them into elegant designs, awesome experiences and catchy brands.</SubPara>
                </TitleWrapper>
            </TitleContainer>


            <ServiceWrapper as={motion.div} className="container"
                variants={container}
                initial="initialState"
                animate="visible"
            >

                <WhitePaper theme={{ width: "90vw" }}>
                    {data.allContentfulService.edges.map(({ node }) => (

                        <Service key={node.id} className={node.slug}
                            as={motion.div}
                            variants={item}
                            initial="initialState"
                            animate="visible"
                        >

                            <div className="CardContent">
                                <h1>{node.name}</h1>

                                <p className="animateTxt">{node.description}</p>

                                <div className="dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>

                            <Img
                                className="cardImg"
                                fluid={node.image.fluid}
                                key={node.id}
                                alt={node.image.title}
                            ></Img>

                        </Service>

                    ))}

                </WhitePaper>

            </ServiceWrapper>

        </motion.div>
    )
}
export default ServiceOffered;
