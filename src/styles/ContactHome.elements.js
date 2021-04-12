import { Link } from 'gatsby';
import styled from 'styled-components';
import contactSally from '../assets/images/Saly-22.svg';
import { size } from '../styles/sizes.element'


export const Container = styled.div`
    display:flex;
    flex-flow:column nowrap;
    justify-content:flex-start;
    padding:0 100px;
    

    @media(max-width:${size.laptop}) and (min-width:${size.mobileS}){
        padding:0;
        justify-content:center;
    }
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
padding:80px 0;
& h3{
    font: normal 300 2em/ 1 'Poppins', sans-serif;
    margin-left:80px;
    padding:20px 0;
    color: rgba(255, 255, 255, 0.651);
}

`;
export const Title = styled.h1`
    font: normal 900 4em/ 1 'Montserrat', sans- serif;
    line-height:1.2;
    text-align:left;
    margin-left:80px;
    color: rgba(255, 255, 255, 0.651);


    @media(max-width:${size.laptop}) and (min-width:${size.mobileS}){
            font: normal 900 2.8em/ 1 'Montserrat', sans- serif;
            text-align:center;
            margin:0;
    }
    
`;
export const SubTitle = styled.p`
    font: normal 400 1.9em/ 1 'Montserrat', sans- serif;
    line-height:1.1;
    text-align:left;
    margin-left:80px;
    padding-top:20px;
    color: rgba(255, 255, 255, 0.651);
    text-transform:lowercase;


    @media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
            font: normal 500 1.4em/ 1 'Montserrat', sans- serif;
            text-align:center;
            margin:0;
    }
`;

export const ContactSally = styled.div`
display:flex;

width:600px;
height:700px;
background-image:url(${contactSally});
background-position: center;
background-repeat: no-repeat;
background-size: cover;

@media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
    width:370px;
    height:400px;
`;
export const ChatButton = styled(Link)`
    // width:100px;
    // height:50px;
    background:linear-gradient(135deg, #C56CD6 0%,#3425AF 100%);
    // border:1px solid rgba(91, 67, 96, 0.165) ;
    border-radius:5px;
    color: white;
    padding: 30px 42px;
    margin:50px auto 20px auto;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font:normal 400 1.5em / 1 'Patua One', cursive;
    cursor:pointer;
    transition:all 0.3s ease-in;
    transform : translateY(-4px);
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
    & :hover{
        transform : translateY(4px);
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0);
    }
`;