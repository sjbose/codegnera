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
// const theme = {
//     WhiteColor: '#ffffff',
//     BlackColor: '#000000',
// }

export const CardContainer = styled.div`
    display:flex;
    font-size:2rem;
    flex-flow:column nowrap;
    justify-content: space-evenly;
    
    // background: rgba(29, 24, 44, 0.264);
    background:rgba(255, 255, 255, 0.151);
    border:1px solid rgba(159, 159, 159,0.153);
    padding:30px;
    backdrop-filter: blur(50px);
    // opacity:0.80;
    border-radius:20px;
    box-shadow: 0 0 2rem 0 rgba(black, .4), 0 0 0.5rem 0 rgba(black, .3);

            @media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
                padding:20px;
        }


    & .CardContent{
        max-width:500px;
        display:flex;
        flex-flow:column nowrap;
        padding:20px 0;
        // position:relative;
        // background:red;


    }
    & .CardContent h1{
        font:normal 800 1em/1.2 'Bitter', serif;
        margin:0;
        letter-spacing: 4px;
        text-transform:capitalize;
        color:rgba(255,255,255,0.650);
    }

    & .CardContent p{
        font:normal 400 0.5em/1.2 'Bitter', serif;
        line-height:25px;
        letter-spacing: 1px;
        text-transform:capitalize;
        color:rgba(255,255,255,0.650);
    }

    & .cardWrapper{

        margin:30px 0;
        
    }




    @media(max-width:${size.laptop}) and (min-width:${size.mobileS}){
        flex-flow:column nowrap;
    }
`;



export const Project = styled.div`
    width:100%;
    height:100%;
    
    // background-color:#99aeff;
    background-size:cover;
    // position:relative;
    
    transition: all 0.4s ease-out;
    box-shadow: 0px 35px 77px -17px rgba(0,0,0,0.44);
    overflow:hidden;
    border-radius:10px;
    

    @media(max-width:${size.tablet}) and (min-width:${size.mobileS}){

    }



`;