import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const LogoWrap = styled.div`
    margin: 0;
    padding:0;
    flex: 0 1 36px;

    min-width:4rem;
    max-width: 8rem;
    

    @media (max-width: 768px) and (orientation: landscape) {
        flex: 0 1 25px;
    }
`
const Logo = () => {
    const data = useStaticQuery(graphql`
        query {
        file(name: { eq: "SquareNewCodegenera" }, extension: { eq: "png" }) {
            childImageSharp {
            fluid(maxWidth:100, pngQuality: 100) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        }
`)

    return (
        <LogoWrap as={Link} to="/">
            <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
        </LogoWrap>
    )
}

export default Logo