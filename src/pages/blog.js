import React from 'react';
import styled from 'styled-components';
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


const WhitePaper = styled.div`

position:relative;
width:${props => props.theme.width};
justify-content:${props => props.theme.justifyContent};
background:rgba(255, 255, 255, 0.451);
border:1px solid rgba(159, 159, 159,0.153);
padding:30px;
    backdrop-filter: blur(50px);
    opacity:0.75;
    border-radius:10px;
    box-shadow: 0 0 2rem 0 rgba(black, .4), 0 0 0.5rem 0 rgba(black, .3);

        @media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
            padding:20px;
    }

`;
const theme = {
    width: '100vw',
    height: '100vh',

}


const Container = styled.div`
    display:flex;
    flex-flow: row wrap;
    justify-content:space-around;
`;




const Blog = () => {


    const data = useStaticQuery(graphql`
            query MyQuery {
        allContentfulArticle(limit: 10, sort: {fields: publish, order: DESC}) {
            edges {
            node {
                articleBody {
                raw
                }
                author
                createdAt(formatString: "DD MMMM,YYYY")
                id
                isPublished
                name
                slug
                publish(formatString: "DD MMMM,YYYY")
                tags
                subtitle
                updatedAt(formatString: "DD MMMM,YYYY")
                image {
                id
                fluid(maxHeight: 10, maxWidth: 10, quality: 10) {
                    aspectRatio
                    base64
                    sizes
                    srcSet
                    src
                    tracedSVG
                }
                }
                category {
                article {
                    category {
                    name
                    }
                }
                }
            }
            }
            totalCount
        }
        }

    `);

    return (
        <Container>
            <WhitePaper theme={{ width: "80vw" }}>
                {
                    data.allContentfulArticle.edges.map(({ node }) => (
                        <h1>{node.name}</h1>
                    ))
                }
            </WhitePaper>

        </Container>
    )
}

export default Blog;
