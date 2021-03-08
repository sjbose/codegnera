import { createGlobalStyle } from 'styled-components';
// import bckimg from './../assets/images/newbg.svg';

const GlobalStyles = createGlobalStyle`
    :root{
        --bg:#ECF0F3;
        --black: #2E2E2E;
        --white: #ffffff;
        --blue:#5352ED; 
    *{
        margin:0;
        padding:0;

    }
    html,
    body {
    
    // 
}
    html {
        font-size: 2vw;
        scroll-behavior: smooth;
        transition: all 0.4s ease-in-out;
        overflow:hidden;
    }
`;
export default GlobalStyles;