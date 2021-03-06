import styled from 'styled-components';
import contactSally from '../assets/images/contactsaly.png';

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}
export const Container = styled.div`
    display:flex;
    flex-flow:column nowrap;
`;
export const Wrapper = styled.div`
display:flex;
flex-flow:row nowrap;
justify-content:space-around;
margin:100px 0;

@media(max-width:${size.mobileL}) and (min-width:${size.mobileS}){
        flex-flow:column nowrap;
        justify-content:space-evenly;
    }

`;

export const TextWrapper = styled.div`
display:flex;
flex-flow: column nowrap;

`;
export const Title = styled.h1`
    font: normal 900 4em/ 1 'Montserrat', sans- serif;
    text-align:right;
    // margin-right:100px;
    margin-right:80px;
    color: rgba(255, 255, 255, 0.651);
    // background-color: #587370;
    // background:linear-gradient(165deg, #f02fc2 0%,#6094ea 100%);
    // -webkit-background-clip: text;
    // -moz-background-clip: text;
    // -webkit-text-fill-color: transparent;
    // -moz-text-fill-color: transparent;

    @media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
            font: normal 900 3.2em/ 1 'Montserrat', sans- serif;
            text-align:center;
            margin:0;
    }
    
`;
export const SubTitle = styled.p`
    font: normal 700 1.9em/ 1 'Montserrat', sans- serif;
    text-align:right;
    margin-right:80px;
    padding-top:10px;
    color: rgba(255, 255, 255, 0.651);
    // text-transform:lowercase;


    @media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
            font: normal 500 1.8em/ 1 'Montserrat', sans- serif;
            text-align:center;
            margin:0;
    }
`;

export const ContactSally = styled.div`
display:flex;

width:470px;
height:700px;
background-image:url(${contactSally});
background-position: center;
background-repeat: no-repeat;
background-size: cover;

@media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
    width:370px;
    height:400px;
`;
