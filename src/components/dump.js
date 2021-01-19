import React from 'react';
import styled from 'styled-components';
import OnRocket from '../assets/images/Onrocket.svg'




const Hero = styled.div`
display:flex;
flex-flow:row nowrap;
justify-content: space-between;
margin:0 auto;
    @media(max-width:600){
        flex:100%;
    }
    @media(max-width:400){
        flex:100%;
    }
}
`;
const TextWrap = styled.h1`
        max-width:1000px;
        font:normal 900 5em/1 'Montserrat', sans-serif;
        text-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
        // padding:1.5em 0 0 1em;
        flex:50%


        @media(max-width:600){
            flex:100%;
        }
        @media(max-width:400){
            flex:100%;
        }
    `;
const BannerImg = styled.img`
        max-width:100%;
        width:995px;
        height:700px;
        flex:50%
`;




const LandingPage = () => {

    return (

        <Hero>
            <TextWrap>
                Let people know about your business
            </TextWrap>


            <BannerImg src={OnRocket} alt="OnRocket" />


        </Hero>

    )
}
export default LandingPage;