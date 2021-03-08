import React from 'react';
// import Slider from "react-slick";
// import styled from 'styled-components';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Project, CardContainer } from '../styles/WorkShowCase.elements';
// import Img from "gatsby-image/withIEPolyfill";
// import { useStaticQuery, graphql } from 'gatsby';


const WorkShowCase = () => {
    return (
        <CardContainer>


            {/* <Img
                    className="cardImg"
                    fluid=""
                    alt=""
                    key=""
                ></Img> */}
            <div className="CardContent">
                <h1>Title</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, dolores? Nulla nihil fugit cum distinctio molestias labore expedita ducimus quos.</p>
                {/* <button>Find more</button> */}
            </div>
            <hr></hr>
            <div className="cardWrapper">
                <Project />
            </div>




        </CardContainer>
    )
}

export default WorkShowCase;
