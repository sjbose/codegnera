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
    scroll-behavior: smooth;
}
    html {
        font-size: 2vw;

    }
`;
export default GlobalStyles;