import React from 'react';
import styled from 'styled-components';

const RectBadge = styled.div`
    width:170px;
    height: 87px;
    position: relative;

    background-color: rgba(255, 255, 255,0.156);
    border-radius: 10px;
    border:1px solid rgba(159, 159, 159,0.153);
    backdrop-filter: blur(50px);
    box-shadow: 0 0 2rem 0 rgba(black, .4), 0 0 0.5rem 0 rgba(black, .3);

    padding:8px;
    display: flex;
    align-items: center;
    justify-content: center;

    transition:all ease-in-out 0.4s;
    &:hover,&:focus{

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
