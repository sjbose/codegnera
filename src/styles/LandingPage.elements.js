import { Link } from 'gatsby';
import styled from 'styled-components';
import { size } from '../styles/sizes.element'


export const BannerImg = styled.img`
        display:flex,
        cursor:pointer,
        width:50%;
        height:600px;
        align-items:center;
        justify-content:center;
        // background:red;
        z-index:5;


        @media(max-width:${size.laptop}) and (min-width:${size.mobileS}){

        width:100%;
        height:auto;
        }


`;

export const BlobL = styled.img`
        position:absolute;
        top:0;
        right:10%;
        width:42%;
        z-index:0;
    @media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
        display:none;
`;
export const BlobS = styled.img`
        position:absolute;
        top:0;
        right:10%;
        width:42%;
        // width:600px;
        // height:700px;
        z-index:0;
        over-flow:hidden;


    @media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
        display:none;
    }
`;
export const RedMoon = styled.img`
        position:absolute;
        top:0;
        right:5%;
        width:25%;
        z-index:1;
    @media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
        width:40%;
        top:0;
        right:50%;
    }
`;

export const Container = styled.div`
    display:flex;
    flex-flow:row nowrap;
    justify-content:center;
    padding:100px 0;
    position:relative;
    margin-bottom:100px;
    // overflow:hidden;

    @media(max-width:${size.laptop}) and (min-width:${size.mobileS}){
        flex-direction:column;
    }
&.BlobContainer{
    position:relative;
}
`;
export const TextWrapper = styled.div`
display:flex;
flex-flow:column nowrap;
// background:yellow;
// padding-top:100px;


@media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
    justify-content:center;
    padding-top:0;
    }

`;


export const SubDev = styled.h3`
font:normal 900 6em/ 1 'Fira Sans', sans-serif;;
// text-transform:capitalize;
letter-spacing: 5px;
padding:0 100px 0 100px;
color: rgba(255, 255, 255, 0.651);
z-index:2;
@media(max-width:${size.laptop}) and (min-width:${size.mobileS}){
    font:normal 900 3.8em/ 1 'Montserrat', sans-serif;
    letter-spacing: 1px;
    padding:0;
    margin:0 auto;
    text-align:center;
    
    color: rgba(193, 193, 193,0.854);
    }
`;
export const RadiatingBtn = styled.div`
        display:flex;
        justify-content:center;
        position: relative;
        z-index: 0;
        // overflow: hidden;
        padding: 4rem 0 1rem 0;
        // background:red;
        
    & .circleWave{
        position: absolute;
        top: 0;
        left: 0;
        // width: 150px;
        // height: 150px;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: HSL(45,100%,50%);
        opacity: 0;
        z-index: -1;
        // pointer-events: none;
        animation: scaleIn 4s infinite cubic-bezier(.36, .11, .89, .32);
        // Button
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
                
    }

    &  .circleEmit{
        display:flex;
        justify-content:center;
        position: relative;
        margin: 0 auto;
        width: 80px;
        height:80px;
        border-radius: 50%;
        background-color: HSL(45,100%,50%);

    }

    @keyframes scaleIn {
        from {
            transform: scale(.5, .5);
            opacity: .5;
        }
        to {
            transform: scale(2.5, 2.5);
            opacity: 0;
        }
}
`;
export const RadiatingBtnLink = styled(Link)`
    display:flex;
    flex-direction:column;
    position:relative;
    cursor:pointer;
    z-index: 4;
//     padding: 5px;
    justify-content:center;
& img{
        width: 50px;
        height:50px;
}
`;