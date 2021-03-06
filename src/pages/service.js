import React from 'react';
import Img from "gatsby-image/withIEPolyfill";
import { useStaticQuery, graphql } from 'gatsby';
import { WhitePaper, Service, SubPara, Title, SubTitle, TitleWrapper, TitleContainer, ServiceWrapper } from '../styles/ServicePage.elements';
import { motion } from 'framer-motion'




const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

// const item = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//         y: 0,
//         opacity: 1
//     }
// };

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
        }
        }
    }
    }
`
    );




    console.log(data);



    return (
        <div id="services">
            <TitleContainer>
                <TitleWrapper>
                    <Title># Services</Title>
                    <SubTitle>
                        We build modern experiences
                </SubTitle>
                    <SubPara>We can help you to build your the unique ideas by converting them into elegant designs, awesome experiences and catchy brands.</SubPara>
                </TitleWrapper>
            </TitleContainer>


            <ServiceWrapper as={motion.div} className="container" variants={container}
                initial="hidden"
                animate="visible">

                <WhitePaper theme={{ width: "90vw" }}>
                    {data.allContentfulService.edges.map(({ node }) => (

                        <Service as={motion.div} key={node.id} className={node.slug}
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

        </div>
    )
}
export default ServiceOffered;
