import React from 'react';
import styled from 'styled-components';

const RectBadge = styled.div`
    width:170px;
    height: 87px;
    position: relative;

    background: #f1f3f6;
    border-radius: 10px;
    box-shadow: 
    inset 0 0 15px rgba(55, 84, 170, 0), 
    inset 0 0 20px rgba(255, 255, 255, 0), 
    10px 10px 18px rgba(55, 84, 170, 0.15), 
    -10px -10px 22px white, 
    inset 0px 0px 4px rgba(255, 255, 255, 0.2);
    // box-shadow: -8px -8px 24px 0 #fff, 8px 8px 24px 0 rgba(174,174,192,0.4);
    padding:8px;
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
        box-shadow: 
        inset -8px -8px 8px 0 rgba(255,255,255,0.7), 
        inset 8px 8px 8px 0 rgba(174,174,192,0.2);
    }
    img{
        width: 180px;
        height: 105px;
        transition:all ease-in-out 0.2s;
        &:hover{
            transform: scale(0.9233);
        }
    }
`;

const RectangularBadge = (props) => {
    return (
        <>
            <RectBadge>
                <img src={props.imgUrl} alt="icon" />

            </RectBadge>
        </>
    )
}

export default RectangularBadge;
