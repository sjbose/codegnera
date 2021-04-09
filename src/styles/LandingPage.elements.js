import { Link } from 'gatsby';
import styled from 'styled-components';


const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}
export const BannerImg = styled.img`
        display:flex,
        cursor:pointer,
        width:800px;
        height:600px;
        align-items:center;
        justify-content:center,
        z-index:5;


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

export const BlobL = styled.img`
        position:absolute;
        top:0;
        right:0;
        width:45%;
        z-index:0;
    @media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
        display:none;
`;
export const BlobS = styled.img`
        position:absolute;
        top:0;
        right:0;
        width:45%;
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
        right:0;
        width:30%;
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
    justify-content:space-around;
    padding:100px 0;
    position:relative;
    margin-bottom:100px;
    overflow:hidden;

    @media(max-width:${size.laptop}) and (min-width:${size.mobileS}){
        flex-direction:column;
    }
`;
export const TextWrapper = styled.div`
display:flex;
flex-flow:column nowrap;
// background:blue;
padding-top:100px;


@media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
    justify-content:center;
    padding-top:0;
    }

`;


export const SubDev = styled.h3`
font:normal 900 4.7em/ 1 'Montserrat', sans- serif;
// text-transform:capitalize;
// padding:0 50px 50px 0;
padding:0 100px 0 200px;
color: rgba(255, 255, 255, 0.651);
z-index:2;
@media(max-width:${size.laptop}) and (min-width:${size.mobileS}){
    font:normal 900 3.5em/ 1 'Montserrat', sans-serif;
    text-align:center;
    padding:50px;
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