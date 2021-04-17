import React from 'react';
import Img from "gatsby-image/withIEPolyfill";
import { useStaticQuery, graphql } from "gatsby";
import { Project, CardContainer } from '../styles/WorkShowCase.elements';
import { ProjectsContainer, TitleWrapper, Title, SubTitle, TitleContainer, Container, Pill, PillContainer } from '../styles/ProjectPage.elements';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';
import { fadeUp } from '../Animation/index';
import SEO from '../components/SEO'


const Projects = () => {

    const data = useStaticQuery(graphql`
        query ProjectQuery {
        allContentfulProject {
            edges {
            node {
                title
                published(formatString: "DD MMMM, YYYY")
                githubLink
                id
                slug
                description {
                description
                }
                developmentType {
                title
                slug
                description
                id
                }
                devtool {
                title
                slug
                id
                icon {
                    fixed(height:25, width:25, quality: 100) {
                    aspectRatio
                    base64
                    height
                    src
                    srcSet
                    width
                    }
                    title
                }
                }
                images {
                id
                title
                fluid(quality: 100) {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                }
                }
            }
            }
            totalCount
        }
        }


    `);
    const settings = {
        dots: false,
        infinite: true,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: true,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,

        pauseOnHover: true,
    };

    return (

        <Container as={motion.div}
            variants={fadeUp}
            initial="initialState"
            animate="visible"
            exit="exit"
        >
            <SEO description="we build  Static website,CMS,Backend, Payment portal, Graphics,Database integration with your existed system , Ui development,  redesign old sites" />
            <TitleContainer>
                <TitleWrapper>
                    <Title>Work</Title>
                    <SubTitle>recent projects</SubTitle>
                </TitleWrapper>
            </TitleContainer>
            <ProjectsContainer >
                {data.allContentfulProject.edges.map(({ node }) => (


                    <CardContainer key={node.id}>

                        <div className="CardContent">
                            <h1>{node.title}</h1>
                            <p>{node.description.description}</p>
                            {/* <button>Find more</button> */}

                        </div>
                        <PillContainer>
                            {node.devtool.map((tool) => (
                                <Pill key={tool.id}>
                                    <Img className="icon" fixed={tool.icon.fixed} key={tool.icon.id} alt={tool.icon.title} />
                                    <p>{tool.title}</p>
                                </Pill>
                            ))}
                        </PillContainer>

                        <hr></hr>
                        <div className="cardWrapper" >
                            <Project key={node.title}>
                                <Slider {...settings}>
                                    {node.images.map((img) => (

                                        <div key={img.id}>
                                            <Img fluid={img.fluid} alt={img.title} />
                                        </div>

                                    ))}
                                </Slider>
                            </Project>
                        </div>




                    </CardContainer>





                ))}
            </ProjectsContainer>




        </Container>
    )
}

export default Projects;
