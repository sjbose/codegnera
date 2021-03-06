import styled from 'styled-components';
import { Link } from 'gatsby';
import backgroundImg from '../assets/images/planet.svg';
import { size } from '../styles/sizes.element'



export const Container = styled.div`
    display:flex;
    height:200vh;
    // padding:50px;
    flex-flow: row wrap;
    justify-content:space-around;
    // background:url(${backgroundImg});
    // background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    

    @media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
        padding:20px;
    }
`;



export const BlogCard = styled.div`
    display: flex;
    max-height:470px;
    flex-flow: column nowrap;
    justify-content:space-evenly;
    // box-shadow: 0 3px 7px -1px rgba(0,0,0,0.44);
    border:1px solid rgba(159, 159, 159,0.253);
    margin-bottom: 1.6%;
    line-height: 1.4;
    font-family: sans-serif;
    border-radius: 5px;
    overflow: hidden;
    z-index: 5;
    cursor:pointer;


&:hover .cardImg{
    transform: scale(1.3) rotate(3deg);
    // filter: hue-rotate(0deg);
    
}
& cardImg::after{
    
}
& .cardImg{
    position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-size: cover;
	background-position: center;
	transition: transform 0.2s;
    max-height:470px;
    // filter: hue-rotate(63deg);
    filter: grayscale(0.1) hue-rotate(64deg);
}

& .meta{
    position: relative;
	z-index: 0;
	height: 200px;
}

& .description{
    // padding: 0.4rem ;
	// background: #fff;
	position: relative;
    z-index: 1;
    background:rgba(255, 255, 255, 0.451);
    // background:linear-gradient(135deg, rgba(114, 23, 234, 0.244) 5%, rgba(234, 96, 96,0.353) 100%);
    border:1px solid rgba(159, 159, 159,0.153);
    padding:30px;
    backdrop-filter: blur(50px);
    box-shadow: 0 0 2rem 0 rgba(black, .4), 0 0 0.5rem 0 rgba(black, .3);
}
& h1,h2{
    font-family: Poppins, sans-serif;
    font-weight: 800;
    // padding:5px 0;
}
& .description h1 {
	line-height: 1;
	margin: 0;
	font-size: 1.7rem;
    text-transform:capitalize;
    color: rgba(255, 255, 255, 0.89);
}
& .description h2 {
	font-size: 1rem;
	font-weight: 300;
	text-transform: uppercase;
	// color: #a2a2a2;
    color: rgba(255, 255, 255, 0.889);
	margin-top: 5px;
}
& .description p{
    overflow: hidden;
    color: rgb(0,0,0,0.50);
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}
& p{
	position: relative;
	margin: 2rem 0 0;
    
}
& h1:before {
	content: "";
	position: absolute;
	height: 5px;
	// background: #5ad67d;
    // background:linear-gradient(270deg, #f02fc2 0%,#6094ea 100%);
    background:linear-gradient(135deg, #fd6e69 0%,#ffc600 100%);
	width: 55px;
    transition:all 0.4s ease-in-out;
	top: 1rem;
	border-radius: 3px;

}
&:hover h1:before {
    width:105px;
}
& p:first-of-type {
	margin-top: 1.15rem;
}

&:hover .details {
    left: 0%;
}

// !MEDEA QUERY
@media (max-width:${size.desktop}) and (min-width:${size.laptop}){

    flex-direction: row;
	max-width: 450px;
    max-height:280px;
    margin: 10rem 0 10rem 0;


    & .meta{
        flex-basis: 45%;
        // height: auto;
    }
    & .description{
        flex-basis:55%;
    }

        //     & .description:before {
        // 		transform: skewX(-3deg);
        // 		content: "";
        // 		// background: #fff;
        // 		width: 30px;
        // 		position: absolute;
        // 		left: -10px;
        // 		top: 0;
        // 		bottom: 0;
        // 		z-index: -1;
        //         background:rgba(255, 255, 255, 0.851);
        // border:1px solid rgba(159, 159, 159,0.153);
        // backdrop-filter: blur(70px);

        // box-shadow: 0 0 2rem 0 rgba(black, .4), 0 0 0.5rem 0 rgba(black, .3);
        // 	}
}
& ul{
    margin: auto;
	padding: 0;
	list-style: none;
    // color: #a2a2a2;
    color: rgba(255, 255, 255, 0.689);
    font:normal 300 0.8em/1 'Poppins', sans-serif;;
}
& ul li {
	display: inline-block;
}

@media(max-width:${size.tablet}) and (min-width:${size.mobileS}){
    margin: 2rem 0;
}

`;

export const MoreLink = styled(Link)`
    text-decoration: none;
    color: rgba(255, 255, 255, 0.889);
    display: inline-block;
    white-space: nowrap;
    margin: 20px 0 0 0;
    text-transform:capitalize;
    transition: all 200ms ease-in;
    position: relative;
    font:normal 700 1.1rem/1 'Quicksand', sans-serif;
    :after {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 0%;
        content: ".";
        color: transparent;
        // background: #5ad67d;
        height:1.5px;
        transition: all 0.4s ease-in;
    }

    :hover {
        color:rgba(245, 199, 17, 0.961);
        ::after {
        width: 100%;
        }
    }
`;
