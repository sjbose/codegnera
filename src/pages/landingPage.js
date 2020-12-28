import React from 'react';
import styled from 'styled-components';
import OnRocket from '../assets/images/Onrocket.svg'




const Hero = styled.div`
display:flex;
flex-flow:row nowrap;
justify-content: space-around;
@media(max-width:1000){}
@media(max-width:600){
    display:block;
    position: relative;
}
@media(max-width:400){
    display:block;
    position: relative;xx
}
    h1{
        font:normal 900 5em/1 'Montserrat', sans-serif;
        text-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
        padding:1.5em 0 0 1em;
        
        @media(max-width:1000){
            font:normal 900 5em/1 'Montserrat', sans-serif;
        text-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
        padding:1.5em 0 0 1em;
        }
        @media(max-width:600){
            font:normal 900 5em/1 'Montserrat', sans-serif;
        text-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
        padding:1.5em 0 0 1em;
        }
        @media(max-width:400){
            font:normal 700 1rem/1 'Montserrat', sans-serif;
        text-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
            padding:0;
        }
    }
    img{
        flex-direction:
        width:995px;
        height:700px;
        @media(max-width: 1000px){
            width:995px;
            height:700px;
        }
        @media(max-width:600px){
            width:569px;
            height:400px;
            position: absolute;
        }
        @media(max-width: 400px){
            width:100%;
            height:250;
            position: absolute;
        }

}
`;




const LandingPage = () => {

    return (

        <Hero>

            <h1>Let people know about your business</h1>

            <img src={OnRocket} alt="OnRocket" />


        </Hero>

    )
}
export default LandingPage;