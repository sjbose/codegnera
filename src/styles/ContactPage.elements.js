import styled from 'styled-components';
import { size } from '../styles/sizes.element'



export const Container = styled.div`
    display:flex;
    flex-flow:column nowrap;
    justify-content:flex-start;
    padding:0 100px;
    background:white;

    @media(max-width:${size.laptop}) and (min-width:${size.mobileS}){
        padding:0 50px;
        justify-content:center;
    }
`;
export const Wrapper = styled.div`
display:flex;
flex-flow:column nowrap;
justify-content:space-around;
margin:100px 0;

@media(max-width:${size.mobileL}) and (min-width:${size.mobileS}){
        flex-flow:column nowrap;
        justify-content:space-evenly;
    }

`;
export const Title = styled.h1`
    font:normal 400 3.5em/1 'Patua One', cursive;
    line-height:1.2;
    text-align:left;
    
    color:black;


    @media(max-width:${size.laptop}) and (min-width:${size.mobileS}){
            font: normal 900 2.8em/ 1 'Patua One', cursive;
            text-align:center;
            margin:0;
    }
    
`;
export const SubTitle = styled.h1`
    font:normal 500 2em/1 'Poppins', sans-serif;
    line-height:1.2;
    text-align:left;
    padding:30px 0;
    color:rgba(167,167,167,1);


    @media(max-width:${size.laptop}) and (min-width:${size.mobileS}){
            font: normal 300 1.5em/ 1 'Poppins', sans-serif;
            // text-align:center;
            margin:0;
    }
    
`;