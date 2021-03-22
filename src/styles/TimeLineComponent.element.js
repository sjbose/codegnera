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

export const LineUl = styled.ul`
    border-left: 4px solid #f2d50f;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    background: rgba(255, 255, 255, 0.03);
    color: rgba(255, 255, 255,0.656);
    font-family: 'Chivo', sans-serif;
    margin: 50px 100px 50px 0;
    letter-spacing: 0.5px;
    position: relative;
    line-height: 1.4em;
    font-size: 1.1em;
    padding: 50px;
    list-style: none;
    text-align: left;
    font-weight: 100;
    // max-width: 40%;
    transition:all 0.3s ease-in;
    h1{
        font-family: 'Saira', sans-serif;
        letter-spacing: 1.5px;
        font-weight: 100;
        font-size: 1em;
    }
    [data-date]{
        font-size:16px;
    }
    h2,h3{
        font-family: 'Saira', sans-serif;
        letter-spacing: 1.5px;
        font-weight: 400;
        font-size: 0.6em;
    }

    @media(max-width:${size.mobileL}) and (min-width:${size.mobileS}){
        font-size:1.33em;
        max-width: 100%;
        margin: 0;


    & h2,h3{
        font-size: 0.55em;
    }

    }
        @media(max-width:${size.laptop}) and (min-width:${size.tablet}){
            font-size:1.33em;
            margin: 0;
    }
`
export const LineLi = styled.li`
    border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
    width: 220px;
    padding: 0 0 0 25px;
    margin-bottom: 50px;
    position: relative;
    &:last-of-type{
        padding-bottom: 0;
        margin-bottom: 0;
        border: none;
    }
    &:before{
        left: -217.5px;
        color: rgb(97, 97, 97);
        content: attr(data-date);
        text-align: right;
        font-weight: 100;
        font-size: 0.9em;
        min-width: 120px;
        font-family: 'Saira', sans-serif;
    }
    &:after{
        box-shadow: 0 0 0 4px #f2d50f;
        left: -57.85px;
        background: #ffffff;
        border-radius: 50%;
        height: 11px;
        width: 11px;
        content: "";
        top: 5px;

    }
    &:before,&:after{
        position: absolute;
        display: block;
        top: 0;
    }
    & p{
        font-family: 'Saira', sans-serif;
        letter-spacing: 1.5px;
        font-weight: 400;
        font-size: 0.6em;
    }

`
export const BadgeWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content:space-between;
    padding:10px 2px;


`;
export const ComponentsWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
`;
export const Title = styled.h1`
    font: normal 900 2em/ 1 'Montserrat', sans- serif;
    text-align:left;
    // margin-right:100px;
    padding:10px 0 0 10px;
    background-color: rgba(255,255,255,0.675);
    // background:linear-gradient(165deg, #f02fc2 0%,#6094ea 100%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;

    @media(max-width:${size.mobileL}) and (min-width:${size.mobileS}){
            font: normal 900 2em/ 1 'Montserrat', sans- serif;
            text-align:center;
    }
    
`;
export const SubTitle = styled.p`
    font: normal 500 0.9em/ 1 'Montserrat', sans- serif;
    text-align:left;
    color:rgba(255,255,255,0.899);
    padding:20px 20px 20px 0;

    // text-transform:capitalize;


    @media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
            font: normal 500 1em/ 1 'Montserrat', sans- serif;
            text-align:center;
            margin:0;
    }
`;
