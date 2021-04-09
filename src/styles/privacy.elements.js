import styled from "styled-components";
import { size } from '../styles/sizes.element'


export const Container = styled.div`
display:flex;
flex-flow:column nowrap;
justify-content:center;
align-items:flex-start;
padding:100px;
background:white;
color:black;
& h1{
    font:normal 700 3em / 1 'Poppins', sans-serif;
    padding-bottom:30px;
}
& h2{
    font:normal 400 2.5em / 1 'Poppins', sans-serif;
    padding-bottom:20px;
}
& h3{
    font:normal 400 1.3em / 1 'Poppins', sans-serif;
    padding-bottom:30px;
}
& p{
    font:normal 300 1.2em / 1 'Poppins', sans-serif;
    line-height:1.3;
    padding-bottom:30px;
}
@media(min-width:${size.mobileS}) and (max-width:${size.laptop}){
padding:40px;
& h1{
    font:normal 700 2.5em / 1 'Poppins', sans-serif;
}
& h2{
    font:normal 400 2.1em / 1 'Poppins', sans-serif;
}
}
`;