import React from 'react';
import styled from 'styled-components';
import ContactFrom from '../components/ContactFrom';
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

const Wrapper = styled.div`
display:flex;
width:100%;
height:auto;
flex-flow:row nowrap;
flex:1 1 0;
justify-content:space-around;
margin:200px 0;


    @media(max-width:${size.mobileL}) and (min-width:${size.mobileS}){
        flex-flow:column nowrap;

    }

`;
const ContactSally = styled.div`
display:flex;
// max-width:200px;
// max-height:300px;
width:470px;
height:700px;
background-image:url(${contactSally});
background-position: center;
background-repeat: no-repeat;
background-size: cover;


`;

const contact = () => {
    return (
        <Wrapper id="contact">
            <ContactSally></ContactSally>
            <ContactFrom />
        </Wrapper>
    )
}

export default contact;
