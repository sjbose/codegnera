import styled from 'styled-components';
import rightArrow from '../assets/images/right-arrow.png';
import { Form } from 'formik';
import Select from 'react-select';

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}


export const ContactForm = styled(Form)`
    // display:flex;
    // position:relative;
    // flex-flow:column nowrap;
    // width:100%;
    // min-width:300px;
    // margin:0 50px;
    
    & label {
        // font:normal 300 0.95em/1.2 'Comfortaa', cursive;
        // width:50px;
        // // background:#fafbfc;
        // padding:2px;
        // text-align:center;
    }
    & input[type=text] {

        display: block;
        // width: 500px;
        padding: 10px 12px;
        font:normal 400 1.3em/1.2 'Poppins', sans-serif;
        color: rgba(137,137,137,0.856);
        background-color: #fff;
        background-image: none;
        border: none;
        border-bottom: 4px solid rgba(90,90,90,1);
        
        // margin-bottom: 30px;
    }
    input[type=text]:focus {
        outline: none !important;
        border:none;
        border-bottom: 4px solid rgba(255,195,0,1);
        background:rgba(255, 255, 255,0.656);
    }
    & textarea{
        display: block;
        // width: 500px;
        padding: 10px 12px;
        font:normal 400 1.3em/1.2 'Poppins', sans-serif;
        line-height: 1.42857143;
        color: rgba(137,137,137,0.856);
        background-color: #fff;
        
        border: none;
        border-bottom: 4px solid rgba(90,90,90,1);
        
        // margin-bottom: 50px;
    }
    textarea:focus{
        outline: none !important;
        border:none;
        border-bottom: 4px solid rgba(255,195,0,1);
        background-color:rgba(255, 255, 255,0.656);
    }
    select:focus{
        outline: none !important;
        
        border: 4px solid rgba(255,195,0,1);
    }
    input[type=text], select, textarea {
        width: 70%;
        padding:15px 0;
        margin: 15px 0;
        border:none;
        border-bottom: 4px solid rgba(90,90,90,1);
        
        resize: vertical;
        &:focus {
            background-color:rgba(255, 255, 255,0.656);
        }
    @media(max-width:${size.mobileL}) and (min-width:${size.mobileS}){
        width:100%;
    }
    }

    & button{
        // position:absolute;
        outline:none;
        width:150px;
        height:60px;
        
        
        border:none;
        background:rgba(42,42,42,1);
        // border:2px solid #97EAB9;
        margin:50px 0 0 0;
        color:white;
        font:normal 500 0.95em/1.2 'Poppins', sans-serif;
        background-position: center;
        background-repeat: no-repeat; 
        background-size: 50px;
        transition:all 0.6s ease-in-out;
        & :hover{
            background-color:#FFC400;
            // background-image:url(${rightArrow});
            // border:2px solid white;
            transform:translateY(-10px);
            box-shadow: 7px 7px 0px 0px rgba(0,0,0,0.7);
    }
        & :focus{
            background:#C98A3A;
        }
    }


    @media(max-width:${size.mobileL}) and (min-width:${size.mobileS}){
        width:100%;
        
        

    }
`;

export const ContactBlock = styled.div`
    display:flex;
    flex-flow:column nowrap;
    justify-content:center;
    background:rgba(255, 255, 255,0.253);
    // background: rgba(121, 114, 145, 0.264);
    border:1px solid rgba(159, 159, 159,0.153);
    max-width:400px;
    height:430px;
    padding:70px 50px;
    margin:0 20px;
    backdrop-filter: blur(50px);
    border-radius:10px;
    box-shadow: 0 0 2rem 0 rgba(black, .4), 0 0 0.5rem 0 rgba(black, .3);
`;
export const Title = styled.h1`
font:normal 400 1.9em/1 'Patua One', cursive;
line-height:1.6;
`;
export const ButtonGroup = styled.div`

display:flex;
flex-flow:row wrap;
justify-content:flex-start;
background:red;
width:60%;
@media(max-width:${size.laptop}) and (min-width:${size.mobileS}){
width:100%;
    }
`;
export const Button = styled.div`
    display:flex;
    // flex-flow:row nowrap;
    justify-content:center;
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
    font:normal 300 1em / 1 'Patua One', cursive;
    margin:10px 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 3px 7px 0 rgba(0,0,0,0.19);
    transition:all 0.3s ease-in;
    cursor:pointer;
    &:hover{
        background:rgba(159,126,245,1);
        color:white;
    }

@media(max-width:${size.laptop}) and (min-width:${size.mobileS}){
    width:80px;
    height:25px;
    padding:5px ;
    font-size:1em;
    }
`;
export const ReactSelect = styled(Select)`
width:70%;
@media(max-width:${size.laptop}) and (min-width:${size.mobileS}){
width:100%;
    }
`;