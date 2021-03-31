import styled from "styled-components";
import { motion } from "framer-motion";
import Close from '../assets/images/close.svg';


const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const ModalBox = styled(motion.div)`
  box-shadow: 0 2px 4px rgba(255, 255, 255, 0.8),
    0 0 0 1px rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  // padding: 6rem 0 0 6rem;
  position:fixed;
  z-index: 5;
  top:-50px;
  // top:0;
  left:0;
  width: 100% ;
  height: 100%;
  margin:0 auto;
  display: flex;
  flex-flow:column nowrap;
  justify-content: space-around;
  align-items: center;
  background: #fff;


  @media(max-width:${size.laptop}) and (min-width:${size.mobileS}){
      padding:0;
      
      justify-content: center;
      align-items: center;

    }
`;


export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: #111;
  display: flex;
  flex-flow:column nowrap;
  justify-content:flex-start;
  // align-items: center;
`;

export const CloseButton = styled.button`
    
    position:absolute;
    top:15%;
    right:10%;

    // font:normal 400 1.5em/1 'Patua One', cursive;
    // background:#3bb75e;
    // border:1px solid #4D7E56 ;
    color:white;
    border-radius:50%;
    padding:10px 20px;
    cursor: pointer;
    outline:none;
    border:none;
    background:url(${Close});
    background-position: center;
    background-repeat: no-repeat;
    background-size:20px;

`;

// export const ToggleButton = styled(motion.button)`
//   font-size: 15px;
//   color: #fff;
//   padding: 0.5rem 0.8rem;
//   margin-top: 3rem;
//   background: #3bb75e;
//   border: none;
//   border-radius: 4px;
//   text-transform: capitalize;
//   cursor: pointer;
// `;

export const ModalContent = styled(motion.div)`
display:flex;
flex-flow:column nowrap;
justify-content:flex-start;

& h1{
  font:normal 400 3.5em/1 'Patua One', cursive;

  @media(max-width:${size.laptop}) and (min-width:${size.mobileS}){
    font:normal 400 2.5em/1 'Patua One', cursive;
    }
  }
  & h3{
    font:normal 500 2.5em/1 'Poppins', sans-serif;
    color:rgba(207, 206, 204 ,1);
    margin:30px 0 50px 0;
  }

`;