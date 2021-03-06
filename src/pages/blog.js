import React from 'react';
// import styled from 'styled-components';
import Img from "gatsby-image/withIEPolyfill";
import { useStaticQuery, graphql } from 'gatsby';
import { MoreLink, BlogCard, Container } from '../styles/ArtilclesPage.elements';




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
                fluid(maxWidth: 500, maxHeight:1050, quality:100, cropFocus: TOP) {
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
