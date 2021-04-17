import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import { size } from '../styles/sizes.element'




const LogoWrap = styled(Link)`
    // margin: 0;
    // padding:0;
    // flex: 0 1 36px;

    // min-width:4rem;
    // max-width: 8rem;
    

    // @media (max-width: 768px) and (orientation: landscape) {
    //     flex: 0 1 25px;
    // }
`
const LogoImg = styled(Img)`
    width:70px;
    height:70px;

    @media(max-width:${size.laptop}) and (min-width:${size.mobileS}){

        width:60px;
        height:60px;
        }
`
const Logo = () => {
    const data = useStaticQuery(graphql`
        query {
        file(name: { eq: "SquareNewCodegenera" }, extension: { eq: "png" }) {
            childImageSharp {
            fluid( pngQuality: 100) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        }
`)

    return (
        <LogoWrap to="/">
            <LogoImg fluid={data.file.childImageSharp.fluid} alt="logo" />
        </LogoWrap>
    )
}

export default Logo