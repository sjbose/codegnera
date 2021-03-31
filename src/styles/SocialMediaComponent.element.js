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
export const TitleContainer = styled.div`
display:flex;
flex-flow:row wrap;
justify-content:flex-start;
    @media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
            
            justify-content:space-around;
            text-align:center;
            
    }
`;

export const TitleWrapper = styled.div`
display:flex;
flex-flow:column wrap;
justify-content:flex-start;
// background:red;

    @media(max-width:${size.tablet}) and (min-width:${size.mobileS}){

            justify-content:space-around;
            text-align:center;
            
    }
`;
export const Title = styled.h1`
    font: normal 900 2em/ 1 'Montserrat', sans- serif;
    text-align:left;
    padding:30px;
    color: rgba(255, 255, 255, 0.651);
    // background-color: #587370;
    // background:linear-gradient(165deg, #f02fc2 0%,#6094ea 100%);
    // -webkit-background-clip: text;
    // -moz-background-clip: text;
    // -webkit-text-fill-color: transparent;
    // -moz-text-fill-color: transparent;

    @media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
            font: normal 900 1.3em/ 1 'Montserrat', sans- serif;
            text-align:center;
            margin:0;
            padding:30px 0;
    }
    
`;

export const Container = styled.div`

    position:relative;
    // background:red;
    font-size:2rem;
    margin:100px auto 200px auto;



    @media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
        
        padding:20px 0;

    }
`;

export const WhitePaper = styled.div`
width:60vw;
display:flex;
flex-flow:column nowrap;
justify-content:space-between;
position:relative;

background:rgba(255, 255, 255, 0.151);
// background:blue;
border:1px solid rgba(159, 159, 159,0.153);
padding:30px;
backdrop-filter: blur(50px);
border-radius:20px;
box-shadow: 0 0 2rem 0 rgba(black, .4), 0 0 0.5rem 0 rgba(black, .3);

& .groupOne{
    width:100%;
    display:flex;
    flex-flow:row nowrap;
    justify-content:space-around;

    // background:green;
    margin:30px 0;
    position:relative;

}
& .groupTwo{
    width:100%;
    display:flex;
    flex-flow:row nowrap;
    justify-content:space-around;
    // background:yellow;
    margin:30px 0;
    position:relative;

}

@media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
    width:80vw;
    padding:0;
    & .groupOne{
        flex-direction:column;
        justify-content:center;
        align-items:center;

    }
    & .groupTwo {
        flex-direction:column;
        justify-content:center;
        align-items:center;
        
    }

}
`;

export const SocialButton = styled.a`
    width:150px;
    
    background:rgba(255, 255, 255, 0.351);
    border:1px solid rgba(91, 67, 96, 0.165) ;
    border-radius:5px;
    color: white;
    padding: 40px 32px;
    // target-name:new;
    // target-new:tab;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font:normal 400 0.6em / 1 'Patua One', cursive;
    cursor:pointer;
    transition:all 0.3s ease-in;
    & :hover{
        transform : translateY(-4px);
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    }
    &:hover.dribble{
        background:rgba(255, 92, 127,0.9)
    }
    &:hover.behance{
        background:rgba(20, 81, 240,0.7)
    }
    &:hover.pinterest{
        background:rgba(209, 43, 43,0.7)
    }
    &:hover.instagram{
        background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
    }
    &:hover.medium{
        background:rgba(239, 239, 239,0.7);
        color:black;
    }
    &:hover.twitter{
        background:rgba(50, 162, 248 ,0.7)
    }
    @media(min-width:${size.mobileS}) and (max-width:${size.tablet}){
        // width:70%;
        margin:10px 0;
    }
`;