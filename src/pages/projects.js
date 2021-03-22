import React from 'react';
import Img from "gatsby-image/withIEPolyfill";
import { useStaticQuery, graphql } from "gatsby";
import { Project, CardContainer } from '../styles/WorkShowCase.elements';
import { ProjectsContainer, TitleWrapper, Title, SubTitle, TitleContainer, Container } from '../styles/ProjectPage.elements';
// import WorkShowCase from '../components/WorkShowCase';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';
import { fadeUp } from '../Animation/index';



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
                    fixed(quality: 100) {
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
            <TitleContainer>
                <TitleWrapper>
                    <Title>Work</Title>
                    <SubTitle>recent projects</SubTitle>
                </TitleWrapper>
            </TitleContainer>

            {data.allContentfulProject.edges.map(({ node }) => (
                <ProjectsContainer key={node.id}>

                    <CardContainer>

                        <div className="CardContent">
                            <h1>{node.title}</h1>
                            <p>{node.description.description}</p>
                            {/* <button>Find more</button> */}

                        </div>
                        <hr></hr>
                        <div className="cardWrapper">
                            <Project key={node.title}>
                                <Slider {...settings}>
                                    {node.images.map((img) => (

                                        <div>
                                            <Img fluid={img.fluid} key={img.id} alt={img.title} />
                                        </div>

                                    ))}
                                </Slider>
                            </Project>
                        </div>




                    </CardContainer>




                </ProjectsContainer>
            ))}





        </Container>
    )
}

export default Projects;
