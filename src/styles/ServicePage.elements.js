import styled from 'styled-components';
import { size } from '../styles/sizes.element'



export const ServiceWrapper = styled.div`
display:flex;
flex-flow:row wrap;
justify-content:space-evenly;
flex: 1 1 auto;
// margin:50px 0 100px 0;
// margin:0 20px;
padding:100px 20px;
font-size:2rem;


`;
export const TitleContainer = styled.div`
display:flex;
flex-flow:row wrap;
padding:80px 0 0 0;
justify-content:flex-start;
    @media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
            
            justify-content:space-around;
            text-align:center;
            
    }
`;
export const TitleWrapper = styled.div`
display:flex;
flex-flow:column wrap;
justify-content:flex-end;
// background:red;
width:50vw;
    @media(max-width:${size.tablet}) and (min-width:${size.mobileS}){

            justify-content:space-around;
            text-align:center;
            width:100vw;
    }
`;
export const Title = styled.h1`
    font: normal 900 4em/ 1 'Montserrat', sans- serif;
    text-align:left;
    
    margin-left:80px;
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
    text-align:left;
    margin-left:80px;
    padding-top:10px;
    color: rgba(255, 255, 255, 0.651);
    text-transform:lowercase;


    @media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
            font: normal 500 1.8em/ 1 'Montserrat', sans- serif;
            text-align:center;
            margin:0;
    }
`;
export const SubPara = styled.p`
    font: normal 300 1.2em/ 1 'Montserrat', sans- serif;
    text-align:left;
    margin-left:80px;
    padding-top:10px;
    color: rgba(255, 255, 255, 0.451);
    text-transform:lowercase;

    @media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
            font: normal 300 1.6em/ 1 'Montserrat', sans-serif;
            text-align:center;
            padding:10px;
            margin:0;
    }
`;


export const Service = styled.div.attrs(props => ({
    className: props.className,
}))`
    &.email-template{
        background:linear-gradient(135deg, #CE9FFC 0%,#7367F0 100%);
    }
    &.graphics-design{
        background:linear-gradient(135deg, #FCDF8A 0%,#E19594 100%);

    }
    &.cms{
        // background:linear-gradient(180deg, #6A99B5 30%,#08203E 100%);
        background:linear-gradient(135deg, #23bcba 0%,#44e994 100%);

    }
    &.website-design{
        // background:linear-gradient(135deg, #FCDF8A 0%,#E19594 100%);
        // background:linear-gradient(135deg, #f2d50f 0%,#da0641 100%);
        background:linear-gradient(135deg, #FF9255 0%,#FF514E 100%);
    }
    &.backend{
        background:linear-gradient(135deg, #c3ec52 0%,#0ba29d 100%);
    }

    // margin-bottom:50px;
    width:240px;
    height:300px;
    margin:50px 0;
    background-color:#99aeff;
    // display:inline-block;
    background-size:cover;
    position:relative;
    cursor:pointer;
    transition: all 0.4s ease-out;
    box-shadow: 0px 35px 77px -17px rgba(0,0,0,0.44);
    overflow:hidden;
    color:white;
    font-family:'Roboto';
    border-radius:20px;
    // padding:0 10px;
    // border:1px solid rgba(187, 186, 186, 0.451);
    // box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    

    &:hover{
    box-shadow: 0px 35px 77px -17px rgba(0,0,0,0.64);
    transform:scale(1.05);
    }
    
    & .cardImg{
        height:100%;
        width:100%;
        
        position:absolute;
        top:0;
        left:0;
        z-index:1;
        transition: all 0.4s ease-out;
    }
    &:hover .cardImg{
        opacity: 0.2;
    }

    & .CardContent{
        position:absolute;
        padding:30px 10px;
        height:calc(100% - 60px);
        z-index:2;
    }
    & .animateTxt{
        opacity:0;
        transition: all 0.6s ease-in-out;
    }
    &:hover .animateTxt
    {
        transform:translateX(0);
        opacity:1;
    }


    & .CardContent h1{
        font:normal 800 0.9em/1.2 'Bitter', serif;
        margin:0;
        text-transform:capitalize;
        text-shadow: 2px 2px 10px rgba(0,0,0,0.3);
        text-align:center;
    }

    & .CardContent p{
        font:normal 400 0.5em/1.2 'Bitter', serif;
        line-height:25px;
        text-transform:capitalize;
        transform: translateX(-270px);
        transition-delay: 0.2s;
        padding-top:10px;
    }
    & .dots{
        position:absolute;
        bottom:20px;
        right:30px;
        // margin: 0 auto;
        width:30px;
        height:30px;
        color:currentColor;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-around;
    }
    & .dots span{
        width: 5px;
        height:5px;
        // background-color: currentColor;
        border-radius: 50%;
        display:block;
        opacity:0;
        transition: transform 0.4s ease-out, opacity 0.5s ease;
        transform: translateY(30px);
    }
    &:hover .dots span{
        opacity:1;
        transform:translateY(0px);
    }
    // !Dots synchronization
    &:hover .dots span:nth-child(1){
    transition-delay: 0.05s;
    }
    &:hover .dots nth-child(2){
        transition-delay: 0.15s;
    }
    &:hover .dots nth-child(3){
        transition-delay: 0.25s;
    }




`;
// const theme = {
//     width: '100vw',
//     height: '100vh',
// }
export const WhitePaper = styled.div`
display:flex;
flex-flow:row wrap;
position:relative;
width:${props => props.theme.width};
justify-content:space-around;
background:rgba(255, 255, 255, 0.151);
// background: rgba(29, 24, 44, 0.264);
// background: rgba(87, 79, 113, 0.264);
// background: rgba(121, 114, 145, 0.264);

border:1px solid rgba(159, 159, 159,0.153);
padding:30px;
backdrop-filter: blur(50px);
// opacity:0.80;
border-radius:20px;
box-shadow: 0 0 2rem 0 rgba(black, .4), 0 0 0.5rem 0 rgba(black, .3);

        @media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
            padding:10px;
    }

`;