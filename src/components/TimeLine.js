import React from 'react';

import styled from 'styled-components';
import BadgeComponent from './BadgeComponent';
import RectangularBadge from './RectagularBadge';
import GoImg from '../assets/images/timelineIcons/golang.png';
import Kotlin from '../assets/images/timelineIcons/kotlin.png';
import Rust from '../assets/images/timelineIcons/rust.png';
import MERN from '../assets/images/timelineIcons/mern.png';
import Contentful from '../assets/images/timelineIcons/contentful.png';
import Sanity from '../assets/images/timelineIcons/sanity.png';
import Strapi from '../assets/images/timelineIcons/strapi.png';
import ReactIco from '../assets/images/timelineIcons/react.png';
import MaterialIco from '../assets/images/timelineIcons/materialUi.png';
import Devops from '../assets/images/timelineIcons/Devops.png';
import JamStack from '../assets/images/timelineIcons/Jamstack.png';
import '../styles/timeline.css';

const LineUl = styled.ul`
    border-left: 4px solid #ACBBCA;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    background: rgba(255, 255, 255, 0.03);
    color: rgb(97, 97, 97);
    font-family: 'Chivo', sans-serif;
    margin: 50px 20px;
    letter-spacing: 0.5px;
    position: relative;
    line-height: 1.4em;
    font-size: 1.03em;
    padding: 50px;
    list-style: none;
    text-align: left;
    font-weight: 100;
    max-width: 30%;
    transition:all 0.3s ease-in;
    h1{
        font-family: 'Saira', sans-serif;
        letter-spacing: 1.5px;
        font-weight: 100;
        font-size: 1.4em;
    }
    [data-date]{
        font-size:16px;
    }
    h2,h3{
        font-family: 'Saira', sans-serif;
        letter-spacing: 1.5px;
        font-weight: 400;
        font-size: 1.4em;
    }
`
const LineLi = styled.li`
    border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
    width: 220px;
    padding: 0 0 0 25px;
    margin-bottom: 50px;
    position: relative;
    &:last-of-type{
        padding-bottom: 0;
        margin-bottom: 0;
        border: none;
    }
    &:before{
        left: -217.5px;
        color: rgb(97, 97, 97);
        content: attr(data-date);
        text-align: right;
        font-weight: 100;
        font-size: 0.9em;
        min-width: 120px;
        font-family: 'Saira', sans-serif;
    }
    &:after{
        box-shadow: 0 0 0 4px #ACBBCA;
        left: -57.85px;
        background: #ffffff;
        border-radius: 50%;
        height: 11px;
        width: 11px;
        content: "";
        top: 5px;

    }
    &:before,&:after{
        position: absolute;
        display: block;
        top: 0;
    }

`
const BadgeWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content:space-between;
    padding:10px 2px;


`;
const ComponentsWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
`;
const Title = styled.h1`
    font: normal 900 4em/ 1 'Montserrat', sans- serif;
    text-align:left;
    // margin-right:100px;
    padding:10px 0 0 10px;
    background-color: ##587370;
    background:linear-gradient(165deg, #f02fc2 0%,#6094ea 100%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    
`;




const TimeLine = (props) => {
    return (
        <div>
            <Title>02.Skills</Title>

            <LineUl>
                <LineLi data-event="2021" >
                    <h3>New year goal</h3>
                    <p>learning this year<span role="img" aria-label="closed smile">😇</span></p>
                    < BadgeWrapper>

                        <ComponentsWrapper>
                            <BadgeComponent imgUrl={GoImg} />
                            <p>GO</p>
                        </ComponentsWrapper>

                        <ComponentsWrapper>
                            <BadgeComponent imgUrl={Kotlin} />
                            <p>Kotlin</p>
                        </ComponentsWrapper>
                        <ComponentsWrapper>
                            <BadgeComponent imgUrl={Rust} />
                            <p>Rust</p>
                        </ComponentsWrapper>
                    </ BadgeWrapper>
                </LineLi>
                <LineLi>
                    <h3>MERN Stack</h3>
                    <p><strong>MERN</strong> <em>stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.</em><span role="img" aria-label="mike">📣</span></p>
                    <BadgeWrapper>
                        <ComponentsWrapper>
                            <RectangularBadge imgUrl={MERN} />

                        </ComponentsWrapper>
                    </BadgeWrapper>
                </LineLi>
                <LineLi>
                    <h3>JAMstack</h3>
                    <p><strong>JAMstack</strong> is a modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.” The JAMstack offers an alternative to the LAMP,MEAN and MERN stacks and has some advantages like scaling, security, speed, and developer experience.</p>
                    <BadgeWrapper>
                        <RectangularBadge imgUrl={JamStack} />
                    </BadgeWrapper>

                </LineLi>
                <LineLi>
                    <h3>CMS</h3>
                    <p><strong>Content management system (CMS)</strong> is a computer software used to manage the
                    creation and modification of digital
                    content. <span role="img" aria-label="mike">📣</span></p>
                    <BadgeWrapper>

                        <ComponentsWrapper >
                            <BadgeComponent imgUrl={Sanity} />
                            <p>Sanity</p>
                        </ComponentsWrapper>
                        <ComponentsWrapper >
                            <BadgeComponent imgUrl={Strapi} />
                            <p>Strapi</p>
                        </ComponentsWrapper>
                        <ComponentsWrapper >
                            <BadgeComponent imgUrl={Contentful} />
                            <p>Contentful</p>
                        </ComponentsWrapper>
                    </BadgeWrapper>
                </LineLi>
                <LineLi>
                    <h3>React,Material-UI</h3>
                    <p><strong>React</strong> is javascript library for building ui components  <span role="img" aria-label="rock">🤟</span>
                    </p>
                    <BadgeWrapper>
                        <ComponentsWrapper>
                            <BadgeComponent imgUrl={ReactIco} />
                            <p>React</p>
                        </ComponentsWrapper>
                        <ComponentsWrapper>
                            <BadgeComponent imgUrl={MaterialIco} />
                            <p>Material</p>
                        </ComponentsWrapper>
                    </BadgeWrapper>
                </LineLi>
                <LineLi>
                    <h3>Devops</h3>
                    <p >DevOps is a set of practices that combines software development and IT operations. It aims to shorten the systems development life cycle and provide continuous delivery with high software quality.</p>
                    <BadgeWrapper>
                        <ComponentsWrapper>
                            <RectangularBadge imgUrl={Devops} />
                        </ComponentsWrapper>
                    </BadgeWrapper>
                </LineLi>
            </LineUl>

        </div >
    )
}

export default TimeLine;
