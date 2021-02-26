import React from 'react';
import styled from 'styled-components';
import OnRocket from '../assets/images/OnRocket_mob3.svg';
import SEO from '../components/SEO';

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}
const BannerImg = styled.img`
        display:flex,
        
        // max-width:100%;
        width:800px;
        height:600px;
        // flex-grow:60%;
        align-items:center;
        justify-content:center,

        @media(max-width:${size.laptop}) and (min-width:${size.tablet}){

        width:700px;
        height:700px;
        }
        @media(max-width:${size.mobileL}) and (min-width:${size.mobileM}){
        width:400px;
        height:400px;
        }
        @media(max-width:${size.mobileS}){
            height:300px;
            width:300px;
        }
`;



const Container = styled.div`
    display:flex;
    flex-flow:row nowrap;
    justify-content:space-around;
    padding:30px 0;
    // background:green;
    // flex: 1 1 auto;

    @media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
        flex-direction:column;
    }
`;
const TextWrapper = styled.div`
display:flex;
flex-flow:column nowrap;
// background:blue;
padding-top:100px;


@media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
    justify-content:center;
    padding-top:0;
    }

`;
const SubWhat = styled.h5`
font:normal 300 1.8em/ 1 'Saira', sans-serif;
text-transform:capitalize;
padding:0 10px 0 200px ;

@media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
    font:normal 500 1.8em/ 1 'Saira', sans-serif;
    text-align:center;
    padding:10px;
    }
`;
const SubDev = styled.h3`
font:normal 900 4.7em/ 1 'Montserrat', sans- serif;
text-transform:capitalize;
// padding:0 50px 50px 0;
padding:0 100px 0 200px;

@media(max-width:${size.laptop}) and (min-width:${size.mobileS}){
    font:normal 900 3.5em/ 1 'Montserrat', sans-serif;
    text-align:center;
    padding:50px;
    }
`;
const LandingPage = () => {


    return (
        <>
            <SEO title="home">
                <title>WELCOME</title>
            </SEO>
            <Container id="home">
                <BannerImg src={OnRocket} alt="banner image" />
                <TextWrapper>
                    <SubWhat>What I do</SubWhat>
                    <SubDev>Design, Develop & Create an Identity for your Product</SubDev>
                </TextWrapper>
            </Container>
        </>

    )
}
export default LandingPage;