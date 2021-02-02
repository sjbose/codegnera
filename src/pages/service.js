import React from 'react';
import styled from 'styled-components';
// import Img from 'gatsby-image';
import Img from "gatsby-image/withIEPolyfill";
import { useStaticQuery, graphql } from 'gatsby';


const ServiceWrapper = styled.div`
display:flex;
flex-flow:row wrap;
position:relative;
justify-content:space-evenly;
flex: 1 1 auto;
margin-top:200px;
margin-right:20px;
`;

const Service = styled.div`
    
    width:300px;
    height:200px;
    position:relative;
    background:#D1D9E6;
    // padding:0;
    margin-bottom:50px;
    // border-radius:50%;
    
`;
// const ServiceTitle = styled.h1``;


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
            image {
            title
                fluid{
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
        <div>

            <ServiceWrapper>

                {data.allContentfulService.edges.map(({ node }) => (

                    <Service key={node.id}>
                        <h4>{node.name}</h4>
                        <p>{node.description}</p>

                        <Img
                            fluid={node.image.fluid}
                            key={node.image.fluid.src}
                            alt={node.image.title}
                            objectFit="cover"
                            objectPosition="50% 50%"
                        />

                    </Service>

                ))}


            </ServiceWrapper>

        </div>
    )
}
export default ServiceOffered;