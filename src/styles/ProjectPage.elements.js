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
justify-content:flex-end;
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
    text-align:right;
    // margin-right:100px;
    margin-right:80px;
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
    font: normal 500 1.7em/ 1 'Montserrat', sans- serif;
    text-align:right;
    margin-right:80px;
    padding-top:10px;
    color: rgba(255, 255, 255, 0.651);
    text-transform:lowercase;


    @media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
            font: normal 500 1.8em/ 1 'Montserrat', sans- serif;
            text-align:center;
            margin:0;
    }
`;
export const ProjectsContainer = styled.div`
    display:flex;
    flex-flow:column nowrap;
    justify-content:space-around;
    margin:50px 0;
    padding:0 100px;
    position:relative;

    @media(max-width:${size.laptop}) and (min-width:${size.mobileS}){
        margin:20px 0;
        padding:0 20px;
    }
`;
export const Container = styled.div`
    display:flex;
    flex-flow:column nowrap;
    justify-content:space-around;
    
    position:relative;
    padding:50px 0 100px 0;
    @media(max-width:${size.laptop}) and (min-width:${size.mobileS}){
        
    }
`;
export const Pill = styled.div`
    display:flex;
    flex-flow:row nowrap;
    justify-content:space-around;
    align-items:center;
    width:100px;
    height:35px;
    color:rgba(0,0,0,0.7);
    border-radius:999px;
    background:rgba(255,255,255,1);
    border:2px solid rgba(159,126,245,1);
    padding: 0 8px;
    text-align: center;
    text-decoration: none;
    font:normal 300 0.5em / 1 'Patua One', cursive;
    margin:10px 5px;
@media(max-width:${size.laptop}) and (min-width:${size.mobileS}){
    width:80px;
    height:25px;
    padding:5px ;
    font-size:0.5em;
    }
}

`;
export const PillContainer = styled.div`
display:flex;
flex-flow:row wrap;
justify-content:flex-start;

`;