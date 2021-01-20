import React from 'react';
import styled from 'styled-components';
import ImageOne from '../assets/images/Onrocketpng.png';

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}
const Container = styled.div`
    display:flex;
    flex-flow:row nowrap;
    justify-content:space-around;
    font-size:2rem;
    flex:1 1 auto;
    position:relative;

    @media(max-width:${size.tablet}) and (min-width:${size.mobileS}){ 
        flex-direction:column;
    }
`;
const ItemOne = styled.img`

// background:red;
max-width:600px;

` ;
const ItemTwo = styled.div`
display:flex;
flex-flow:column nowrap;

padding:30px;
    @media(max-width:${size.tablet}) and(min-width:${size.mobileS}){
        padding:0;
    }

    & h3{
        font:normal 400 1.4em / 1 'Patua One', cursive;
        line-height:1.1;
        padding-bottom:15px;
    }
    & p{
        font:normal 300 0.7em/1.2 'Comfortaa', cursive;
        line-height:1.3;
    }
` ;
const WhitePaper = styled.div`

position:relative;
background:rgba(255, 255, 255, 0.451);
padding:30px;


`;
const about2 = () => {


    return (
        <div>
            <Container>
                <ItemOne src={ImageOne} alt="Image">

                </ItemOne>
                <ItemTwo>
                    <WhitePaper>
                        <h3>"A little bit about myself</h3>
                        <p>Hi I’m Subhajeet bose a software developer based in kolkata. I'm working as a independent developer  for 5 years.I've done work for companies,consulted for startups and collaborated with talented people to create digital products for both business and consumer use.
                        I love the Web platform and I want to make it better for everyone. And I consider myself to be completely blessed that I get to build it for a living.I have a Bachelor’s Degree in Computer application; but everything I know of and on the Web today is self-taught.
                        I’ve always wanted to study multiple majors because I never wanted to stop learning.
                        I’m grateful that I ended up in a field where one of the major requirements for
                    staying relevant is to continuously keep learning</p>
                    </WhitePaper>

                </ItemTwo>
            </Container>


        </div>
    )
}

export default about2;
