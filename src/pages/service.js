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
justify-content:space-evenly;
flex: 1 1 auto;
margin:200px auto 200px auto;
// width:100%;
// max-width:${size.laptoL};
font-size:1rem
`;


const Service = styled.div.attrs(props => ({
    className: props.className,
}))`
    margin-bottom:50px;
    width:300px;
    height:380px;
    margin:10px;
    background-color:#99aeff;
    display:inline-block;
    background-size:cover;
    position:relative;
    cursor:pointer;
    transition: all 0.4s ease-out;
    box-shadow: 0px 35px 77px -17px rgba(0,0,0,0.44);
    overflow:hidden;
    color:white;
    font-family:'Roboto';
    border-radius:20px;
    border:1px solid rgba(187, 186, 186, 0.451);
    // box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);


    &:hover{
    box-shadow: 0px 35px 77px -17px rgba(0,0,0,0.64);
    transform:scale(1.05)
    }
    
    & .cardImg{
        height:100%;
        width:100%;
        position:absolute;
        top:0;
        left:0;
        z-index:1;
        transition: all 0.4s ease-out;
    }
    &:hover .cardImg{
        opacity: 0.2;
    }

    & .CardContent{
        position:absolute;
        padding:30px;
        height:calc(100% - 60px);
        z-index:2;
    }
    & .animateTxt{
        opacity:0;
        transition: all 0.6s ease-in-out;
    }
    &:hover .animateTxt
    {
        transform:translateX(0);
        opacity:1;
    }


    & .CardContent h1{
        font:normal 800 1.6em/1.2 'Bitter', serif;
        margin:0;
        text-transform:capitalize;
        text-shadow: 2px 2px 10px rgba(0,0,0,0.3);
        // z-index:99;
    }

    & .CardContent p{
        font:normal 400 1.1em/1.2 'Bitter', serif;
        line-height:25px;
        text-transform:capitalize;
        transform: translateX(-270px);
        transition-delay: 0.2s;
        padding-top:30px;
    }
    & .dots{
        position:absolute;
        bottom:20px;
        right:30px;
        margin: 0 auto;
        width:30px;
        height:30px;
        color:currentColor;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-around;
    }
    & .dots span{
        width: 5px;
        height:5px;
        background-color: currentColor;
        border-radius: 50%;
        display:block;
        opacity:0;
        transition: transform 0.4s ease-out, opacity 0.5s ease;
        transform: translateY(30px);
    }
    &:hover .dots span{
        opacity:1;
        transform:translateY(0px);
    }


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

            <ServiceWrapper>

                {data.allContentfulService.edges.map(({ node }) => (

                    <Service key={node.id} className={node.name}>

                        <div className="CardContent">
                            <h1>{node.name}</h1>
                            <h2></h2>
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


            </ServiceWrapper>

        </div>
    )
}
export default ServiceOffered;
