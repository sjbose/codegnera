import styled from 'styled-components';
import { Link } from 'gatsby';


const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const Container = styled.div`
    display:flex;
    flex-flow:column nowrap;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    font-size:2rem;
    flex:1 1 auto;
    position:relative;



    @media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
        padding:20px;
        
    }
`;
export const AboutCloud = styled.img`
        position:absolute;
        top:0;
        right:0;
        width:100%;
        z-index:0;
    @media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
        // width:40%;
        // top:0;
        // right:50%;
    }
`;

export const ProfilePic = styled.div`
    position:relative;
    width:250px;
    height:250px;
    padding:40px 0;
    margin:50px 0 0 0;

    & h5{
        font:normal 400 1.5em / 1 'Patua One', cursive;
        color:rgba(255,255,255,0.654);
        padding:10px 0;
    }
    & p{
        font:normal 300 0.7em/1.2 'Comfortaa', cursive;
        color:rgba(255,255,255,0.454);
        padding:5px 0;
    }
    & .profileImg{
    width:100%;
    height:100%;
    border-radius:50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    // background:linear-gradient(135deg, #CE9FFC 0%,#7367F0 100%);
    // background:linear-gradient(135deg, #ffb738 0%,#acf523 100%);
    background:#ffb738;
    
    }
    @media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
        
}
`;

export const WhitePaper = styled.div`
max-width:100%;
position:relative;
// background:rgba(255, 255, 255, 0.351);
//   background-color: #fff;
  background-image:
    radial-gradient(at top left, rgba(105, 89, 253, 0.588), transparent),
    radial-gradient(at top right, rgba(246, 105, 83, 0.419), transparent),

    radial-gradient(at bottom left,rgba(167, 211, 242, 0.882), transparent);
  background-size: 100% 100%;
  background-repeat: no-repeat;
border:1px solid rgba(159, 159, 159,0.153);
padding:50px;
// backdrop-filter: blur(50px);
border-radius:20px;
box-shadow: 0 0 2rem 0 rgba(black, .4), 0 0 0.5rem 0 rgba(black, .3);
margin: ${props => props.extraWidth ? "0 100px" : "0 250px"};


@media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
    margin:100px 0 ;

}

`;
export const TextWrapper = styled.div`
    

    & h3{
        font:normal 400 1.4em / 1 'Patua One', cursive;
        line-height:1.1;
        padding:15px 0;
    }
    & p{
        font:normal 300 0.7em/1.2 'Comfortaa', cursive;
        line-height:1.3;
        padding-bottom:10px;

    }
    & h5{
        font:normal 400 1em / 1 'Patua One', cursive;
    }

`;
export const ChatButton = styled(Link)`
    background:linear-gradient(135deg, #C56CD6 0%,#3425AF 100%);
    // border:1px solid rgba(91, 67, 96, 0.165) ;
    border-radius:5px;
    color: white;
    padding: 20px 32px;
    margin:20px 0;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font:normal 400 0.6em / 1 'Patua One', cursive;
    cursor:pointer;
    transition:all 0.3s ease-in;
    & :hover{
        transform : translateY(-4px);
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
    }
`;