import styled from 'styled-components'
import { size } from '../styles/sizes.element'
import { Link } from 'gatsby'



export const Container = styled.div`
display:flex;
flex-flow:row nowrap;
justify-content:space-around;
padding:100px 0 50px 0;
overflow:hidden;
background: linear-gradient(105.09deg, #363594 21.36%, #2E246B 72.31%, rgba(46, 36, 107, 0.68) 90.44%);
@media(min-width:${size.mobileS}) and (max-width:${size.tablet}){
    flex-direction:column-reverse;
    margin:0 auto;
    padding:0;
    }

`;
export const ColOne = styled.div`
display:flex;
flex-flow:column nowrap;
justify-content:center;
align-items:center;
padding:0 0 50px 0;
& p{
    font:normal 300 0.9em / 1 'Poppins',sans-serif;
    color:white;
    padding:10px;
}
@media(min-width:${size.mobileS})and(max-width:${size.laptop}){
    flex-direction: column;
}
`;
export const ColTwo = styled.div`
display:flex;
flex-flow:row nowrap;
justify-content:space-around;
// background:white;

@media(min-width:${size.mobileS})and(max-width:${size.laptop}){
    flex-direction: column;
}

`;
export const SubCol = styled.div`
display:flex;
flex-flow:column nowrap;
justify-content:space-evenly;
padding:20px 40px;
// background:blue;

@media(min-width:${size.mobileS})and(max-width:${size.laptop}){
padding:0;
}

`;
export const FooterLink = styled(Link)`
    color: white;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font:normal 300 0.9em / 1 'Poppins', sans-serif;
    text-align:left;
    cursor:pointer;
    transition:all 0.3s ease-in;
    & :hover{
        transform : translateY(-4px);
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    }
`;
export const SocialLink = styled.a`
color: white;
padding: 5px 10px;
text-align: center;
text-decoration: none;
display: inline-block;
padding: 10px 0;
font: normal 300 0.9em / 1 'Poppins', sans-serif;
text-align:left;
cursor: pointer;
transition: all 0.3s ease -in;
    & : hover{
    transform: translateY(-4px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
}
`;
export const Row = styled.div`
display:flex;
flex-flow:row nowrap;
justify-content:space-around;
// background:red;

`;
export const Hr = styled.hr`
    width:80%;
    margin 0 auto;

    @media(min-width:${size.mobileS})and(max-width:${size.laptop}){
    width:100%;
}
`;