import { createGlobalStyle } from 'styled-components';
import bckimg from './../assets/images/bg.svg';

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
    html {
        font-size: 2vw;
        // background-image: url(${bckimg});
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
    }
`;
export default GlobalStyles;