import React from 'react';
import styled from 'styled-components';
// import Img from 'gatsby-image';
import Img from "gatsby-image/withIEPolyfill";
import { useStaticQuery, graphql } from 'gatsby'

const ServiceWrapper = styled.div`
display:flex;
flex-flow:row wrap;
position:relative;
justify-content:space-evenly;
flex: 1 1 auto;
margin-top:200px;
margin-right:20px;
`;
// const ServiceWrapperTwo = styled.div`
//     display:flex;
//     flex-flow:row wrap;
//     justify-content:space-evenly;
//     flex: 1 1 auto;



// `;
const Service = styled.div`
    
    width:250px;
    height:250px;
    position:relative;
    background:#D1D9E6;
    padding:20px;
    margin-bottom:50px;
    border-radius:50%;
    
`;
// const ServiceTitle = styled.h1``;


const ServiceOffered = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
    allFile(filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "serviceImg"}}) {
        edges {
        node {
            childImageSharp {
            fluid {
                base64
                aspectRatio
                sizes
                src
                srcSet
                originalName
            }
            id
            }
        }
        }
    }
    }


    `)
    const generateHexString = (length) => {
        let ret = "";
        while (ret.length < length) {
            ret += Math.random().toString(16).substring(2);
        }
        return ret.substring(0, length);
    }


    const serviceImg = {
        imgStyle: {
            borderRadius: '50%',
        }
    }

    return (
        <>

            <ServiceWrapper>

                {data.allFile.edges.map(({ node }) => (

                    <Service key={generateHexString(5)}>
                        <Img className={serviceImg.imgStyle} fluid={node.childImageSharp.fluid}
                            objectFit="cover" objectPosition="50% 50%" />

                    </Service>

                ))}


                {/* <Service></Service>
                <Service></Service>
                <Service></Service> */}

            </ServiceWrapper>

            {/* <ServiceWrapperTwo>
                <Service></Service>
                <Service></Service>
                <Service></Service>
                <Service></Service>

            </ServiceWrapperTwo> */}
        </>
    )
}

export default ServiceOffered;

