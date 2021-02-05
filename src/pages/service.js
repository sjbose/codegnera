import React from 'react';
import styled from 'styled-components';
// import Img from 'gatsby-image';
import Img from "gatsby-image/withIEPolyfill";
import { useStaticQuery, graphql } from 'gatsby';

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}
const ServiceWrapper = styled.div`
display:flex;
flex-flow:row wrap;
position:relative;
justify-content:space-evenly;
flex: 1 1 auto;
margin:200px 20px 200px 0;
// margin-right:20px;
font-size:2rem;

`;

const Service = styled.div`
    
    max-width:300px;
    max-height:400px;
    // height:400px;
    position:relative;
    background:#ffffff;
    margin-bottom:50px;
    border:1px solid rgba(159, 159, 159,0.4);
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        @media(max-width:${size.mobileL}) and (min-width:${size.mobileS}){ 
            &:nth-child(even){
                margin-top:80px;
            }
        }
        @media(max-width:${size.mobileL}) and (min-width:${size.mobileS}){ 
            &:nth-child(odd){
                margin-top:30px;
            }
        }

`;
const ServiceTitle = styled.h1`
    font:normal 800 0.7em/1.2 'Bitter', serif;
    line-height:1.3;
    text-transform:capitalize;
    text-align:center;
    

`;
const ServiceContent = styled.p`
    font:normal 400 0.6em/1.2 'Bitter', serif;
    line-height:1.3;
    letter-spacing: 0.3ch;
    text-transform:capitalize;
    text-align:center;
    padding:10px 0;
`;
const CardHead = styled.div`


`;
const CardBody = styled.div`
    // max-height:200px;
    padding:20px;
    background: #ffffff;
    position: relative;

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
                fluid(maxWidth: 200, maxHeight: 200, quality: 10){
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

            <ServiceWrapper>

                {data.allContentfulService.edges.map(({ node }) => (

                    <Service key={node.id}>


                        <CardHead>
                            <Img
                                fluid={node.image.fluid}
                                key={node.id}
                                alt={node.image.title}
                                objectFit="cover"
                                objectPosition="50% 50%"
                            />
                        </CardHead>
                        <CardBody>
                            <ServiceTitle>{node.name}</ServiceTitle>
                            <ServiceContent>{node.description}</ServiceContent>
                        </CardBody>
                    </Service>

                ))}


            </ServiceWrapper>

        </div>
    )
}
export default ServiceOffered;