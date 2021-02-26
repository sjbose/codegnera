import React from 'react';
import styled from 'styled-components';
import Img from "gatsby-image/withIEPolyfill";
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';



const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
}



const Container = styled.div`
    display:flex;
    // height:100vh;
    padding:50px;
    flex-flow: row wrap;
    justify-content:space-around;
`;



const BlogCard = styled.div`
    display: flex;
    flex-flow: column nowrap;
    margin: 1rem 10px;
    box-shadow: 0 3px 7px -1px rgba(0,0,0,0.44);
    margin-bottom: 1.6%;
    line-height: 1.4;
    font-family: sans-serif;
    border-radius: 5px;
    overflow: hidden;
    z-index: 0;


&:hover .cardImg{
    transform: scale(1.3) rotate(3deg);
}
& .cardImg{
    position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-size: cover;
	background-position: center;
	transition: transform 0.2s;
}

& .meta{
    position: relative;
	z-index: 0;
	height: 200px;
}

& .description{
    padding: 1rem;
	background: #fff;
	position: relative;
    z-index: 1;
}
& h1,h2{
    font-family: Poppins, sans-serif;
    font-weight: 800;
}
& .description h1 {
	line-height: 1;
	margin: 0;
	font-size: 1.7rem;
    // margin-top:20px;
    text-transform:capitalize;
}
& .description h2 {
	font-size: 1rem;
	font-weight: 300;
	text-transform: uppercase;
	color: #a2a2a2;
	margin-top: 5px;
}
& .description p{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}
& p{
	position: relative;
	margin: 2rem 0 0;

}
& h2:before {
	content: "";
	position: absolute;
	height: 5px;
	background: #5ad67d;
	width: 55px;

	// top: 1rem;
	border-radius: 3px;
}
& p:first-of-type {
	margin-top: 1.15rem;
}

&:hover .details {
    left: 0%;
}

// !MEDEA QUERY
@media (max-width:${size.desktop}) and (min-width:${size.laptop}){

    flex-direction: row;
	max-width: 700px;

    & .meta{
        flex-basis: 40%;
        height: auto;
    }
    & .description{
        flex-basis:60%;
    }

    & .description:before {
		transform: skewX(-3deg);
		content: "";
		background: #fff;
		width: 30px;
		position: absolute;
		left: -10px;
		top: 0;
		bottom: 0;
		z-index: -1;
	}
}
& ul{
    margin: auto;
	padding: 0;
	list-style: none;
    color: #a2a2a2;
    font:normal 300 0.8em/1 'Poppins', sans-serif;;
}
& ul li {
	display: inline-block;
}

`;

const MoreLink = styled(Link)`
    text-decoration: none;
    color: #403D3C;
    display: inline-block;
    white-space: nowrap;
    margin: 30px 0 0 0;
    text-transform:capitalize;
    transition: all 200ms ease-in;
    position: relative;
    font:normal 700 1.1rem/1 'Quicksand', sans-serif;
    :after {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 0%;
        content: ".";
        color: transparent;
        background: #5ad67d;
        height:1.5px;
        transition: all 0.4s ease-in;
    }

    :hover {
        color:#5ad67d;
        ::after {
        width: 100%;
        }
    }
`;


const Blog = () => {


    const data = useStaticQuery(graphql`
        query MyQuery {
        allContentfulArticle(limit: 10, sort: {fields: publish, order: DESC}) {
            edges {
            node {
                name
                subtitle
                slug
                tags
                publish(formatString: "DD MMMM,YYYY")
                author
                category {
                name
                }
                articleBody {
                articleBody
                id
                }
                isPublished
                createdAt(formatString: "DD MMMM,YYYY")
                id
                updatedAt(formatString: "DD MMMM,YYYYY")
                image {
                id
                title
                fluid(maxWidth: 10, maxHeight: 10, quality:100, cropFocus: CENTER) {
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

    return (
        <Container>
            {
                data.allContentfulArticle.edges.map(({ node }) => (
                    <BlogCard key={node.id}>
                        <div className="meta">
                            <Img className="cardImg"
                                fluid={node.image.fluid}
                                key={node.image.id}
                                alt={node.image.title} />
                        </div>
                        <div className="description">
                            <h1>{node.name}</h1>
                            <h2>{node.subtitle}</h2>
                            <ul>
                                <li>{node.publish}</li>
                                <li> -- </li>
                                <li>@{node.author}</li>
                            </ul>
                            <p className="articleBody">{node.articleBody.articleBody}</p>
                            <MoreLink to={`/blog/${node.slug}/`} >Read More</MoreLink>
                        </div>
                    </BlogCard>
                ))
            }

        </Container>
    )
}

export default Blog;
