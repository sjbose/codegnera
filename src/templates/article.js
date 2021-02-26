import React from 'react';
import { graphql, Link } from "gatsby";
import styled from 'styled-components';
import Img from "gatsby-image/withIEPolyfill";
// import { useStaticQuery, graphql } from 'gatsby';
// import { Link } from 'gatsby';


export const query = graphql`
query ($slug: String!) {
  contentfulArticle(slug: {eq: $slug}) {
    name
    subtitle
    slug
    tags
    id
    author
    publish(formatString: "DD MMMM, YYYY")
    updatedAt(formatString: "DD MMMM, YYYY")
    image {
      fluid(maxWidth: 10, maxHeight: 10, cropFocus: CENTER, quality: 10) {
        aspectRatio
        base64
        sizes
        src
        srcSet
      }
      id
      title
    }
    category {
      name
    }
  }
}

`




const article = (props) => {
    return (
        <div>
            <h1>{props.data.contentfulArticle.name}</h1>
        </div>
    )
}

export default article
