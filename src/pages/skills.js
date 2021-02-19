import React from 'react';
import TimeLine from '../components/TimeLine';
import TimeLine2 from '../components/TimeLine2';
import styled from 'styled-components';



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
    padding:100px 30px;
    @media(max-width:${size.mobileL}) and (min-width:${size.mobileS}){
        flex-direction: column;

    }
        @media(max-width:${size.laptop}) and (min-width:${size.tablet}){
        flex-direction: row;

    }
`;

const Skills = () => {

    return (
        <Container >
            <TimeLine />
            <TimeLine2 />
        </Container>
    )
}

export default Skills;
