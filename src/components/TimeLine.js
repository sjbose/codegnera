import React from 'react';

import { LineUl, LineLi, BadgeWrapper, ComponentsWrapper, Title, SubTitle } from '../styles/TimeLineComponent.element';
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
// import MaterialIco from '../assets/images/timelineIcons/materialUi.png';
import Devops from '../assets/images/timelineIcons/Devops.png';
import JamStack from '../assets/images/timelineIcons/Jamstack.png';
import Gatsby from '../assets/images/timelineIcons/gatsby.png';
import '../styles/timeline.css';





const TimeLine = (props) => {
    return (
        <div>
            <Title>My Skills</Title>
            <SubTitle>What I've learned <br />through out the years</SubTitle>
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

                    <BadgeWrapper>
                        <ComponentsWrapper>
                            <RectangularBadge imgUrl={MERN} />

                        </ComponentsWrapper>
                    </BadgeWrapper>
                </LineLi>
                <LineLi>
                    <h3>JAMstack</h3>

                    <BadgeWrapper>
                        <RectangularBadge imgUrl={JamStack} />
                    </BadgeWrapper>

                </LineLi>
                <LineLi>
                    <h3>CMS</h3>

                    <BadgeWrapper>

                        <ComponentsWrapper >
                            <BadgeComponent imgUrl={Sanity} />
                            <p style={{ fontSize: '0.455em' }}>Sanity</p>
                        </ComponentsWrapper>
                        <ComponentsWrapper >
                            <BadgeComponent imgUrl={Strapi} />
                            <p style={{ fontSize: '0.455em' }}>Strapi</p>
                        </ComponentsWrapper>
                        <ComponentsWrapper >
                            <BadgeComponent imgUrl={Contentful} />
                            <p style={{ fontSize: '0.455em' }}>Contentful</p>
                        </ComponentsWrapper>
                    </BadgeWrapper>
                </LineLi>
                <LineLi>
                    <h3>React,Gatsby</h3>

                    <BadgeWrapper>
                        <ComponentsWrapper>
                            <BadgeComponent imgUrl={ReactIco} />
                            <p>React</p>
                        </ComponentsWrapper>
                        <ComponentsWrapper>
                            <BadgeComponent imgUrl={Gatsby} />
                            <p>Gatsby</p>
                        </ComponentsWrapper>
                    </BadgeWrapper>
                </LineLi>
                <LineLi>
                    <h3>Devops</h3>

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
