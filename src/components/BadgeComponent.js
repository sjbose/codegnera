import React from 'react';
import styled from 'styled-components';

const Badge = styled.div`
    width:60px;
    height: 60px;
    position: relative;

    background: #f1f3f6;
    border-radius: 50%;
    box-shadow: 
        inset 0 0 15px rgba(55, 84, 170, 0), 
        inset 0 0 20px rgba(255, 255, 255, 0), 
        10px 10px 18px rgba(55, 84, 170, 0.15), 
        -10px -10px 22px white, 
        inset 0px 0px 4px rgba(255, 255, 255, 0.2);
    transition: 0.7s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
    font-size: 0;
    transition:all ease-in-out 0.4s;
    &:hover,&:focus{
        background: linear-gradient(145deg, #e6e6e6, #ffffff);
        box-shadow:  16px 16px 21px #dbdbdb, 
            -16px -16px 21px #ffffff;
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
