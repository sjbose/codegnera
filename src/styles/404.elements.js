import styled from 'styled-components';
import Img404 from '../assets/images/404.svg';
import { size } from '../styles/sizes.element'


export const Container = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
    height:100vh;
    background:url(${Img404});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin:0;
    padding:0;
    & h1{
        font:normal 900 3.2em/1 Poppins, sans-serif;
        color:rgba(255,255,255,0.7);
        margin-top:7%;

    }
    @media(max-width:${size.laptop}) and (min-width:${size.mobileS}){
        h1{
            font:normal 900 2.8em/1 Poppins, sans-serif;
            margin-top:10%;
        }
    }
    
`;