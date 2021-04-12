import styled from 'styled-components';
import { size } from '../styles/sizes.element'


export const Container = styled.div`
    display:flex;
    flex-flow:row nowrap;
    justify-content:space-around;
    font-size:2rem;
    // flex:1 1 auto;
    position:relative;
    margin-bottom:50px;
    

    @media(max-width:${size.laptop}) and (min-width:${size.mobileS}){ 
        flex-direction:column;
        justify-content:center;
    }
`;
export const WrapperImg = styled.div`
display:flex;
flex-flow:column nowrap;
justify-content:space-around;

    @media(max-width:${size.laptop}) and(min-width:${size.mobileS}){
        
    }
`;
export const ItemOne = styled.img`
margin:0 auto;

width:100%;
height:600px;



` ;
export const ItemTwo = styled.div`
display:flex;
flex-flow:column nowrap;
padding:30px;


    & h3{
        font:normal 400 1.4em / 1 'Patua One', cursive;
        line-height:1.1;
        padding-bottom:15px;
    }
    & p{
        font:normal 300 0.7em/1.2 'Comfortaa', cursive;
        line-height:1.3;
        

    }
    @media(max-width:${size.laptop}) and(min-width:${size.mobileS}){
        padding:5px;

    }

` ;
export const WhitePaper = styled.div`
width:50vw;
margin:0 auto;
position:relative;
background:rgba(255, 255, 255, 0.451);
border:1px solid rgba(159, 159, 159,0.153);
padding:30px;
backdrop-filter: blur(50px);
border-radius:20px;
box-shadow: 0 0 2rem 0 rgba(black, .4), 0 0 0.5rem 0 rgba(black, .3);

@media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
    // padding:20px;
    width:70vw;
}

`;
export const Title = styled.h1`
    font: normal 900 4em/ 1 'Montserrat', sans- serif;
    text-align:right;
    margin-right:100px;
    
    color: rgba(255, 255, 255, 0.651);
    // background-color: #587370;
    // background:linear-gradient(165deg, #f02fc2 0%,#6094ea 100%);
    // background-size: 100%;
    // -webkit-background-clip: text;
    // -moz-background-clip: text;
    // -webkit-text-fill-color: transparent;
    // -moz-text-fill-color: transparent;

    @media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
            font: normal 900 3.2em/ 1 'Montserrat', sans-serif;
            text-align:center;
            margin:100px 0 50px 0;
    }
`;
export const AboutWrapper = styled.div`
    margin:200px 0 100px 0;
        @media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
            margin:150px 0 50px 0;
    }
`;