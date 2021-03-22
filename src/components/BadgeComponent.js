import React from 'react';
import styled from 'styled-components';

const Badge = styled.div`
    width:60px;
    height: 60px;
    position: relative;
    
    border-radius: 50%;
    background-color: rgba(255, 255, 255,0.356);
    border:1px solid rgba(159, 159, 159,0.153);
    backdrop-filter: blur(50px);
    box-shadow: 0 0 2rem 0 rgba(black, .4), 0 0 0.5rem 0 rgba(black, .3);
    transition: 0.7s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    font-size: 0;
    transition:all ease-in-out 0.4s;
    &:hover,&:focus{

    }
    img{
        width: 40px;
        height: 40px;
        transition:all ease-in-out 0.2s;
        &:hover{
            transform: scale(0.9233);
        }
    }

`;

const BadgeComponent = (props) => {
    return (
        <>
            <Badge>
                <img src={props.imgUrl} alt="icon" />

            </Badge>
        </>
    )
}

export default BadgeComponent;
