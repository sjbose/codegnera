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
font-size:2rem;
`;

const Service = styled.div`
    
    width:300px;
    height:300px;
    position:relative;
    background:#ffffff;
    // padding:0;
    margin-bottom:50px;
    // border-radius:50%;
    
`;
const ServiceTitle = styled.h1`
    font:normal 800 1em/1.2 'Bitter', serif;
    line-height:1.3;
    text-transform:capitalize;
    text-align:center;

`;
const ServiceContent = styled.p`
    font:normal 400 0.5em/1.2 'Bitter', serif;
    line-height:1.3;
    text-transform:capitalize;
    text-align:center;

`;
const ServiceHeader = styled.div`
padding:20px;
`;

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
                fluid(maxWidth: 200, maxHeight: 200){
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
                        <ServiceHeader>
                            <ServiceTitle>{node.name}</ServiceTitle>
                            <ServiceContent>{node.description}</ServiceContent>
                        </ServiceHeader>


                        <Img
                            fluid={node.image.fluid}
                            key={node.id}
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