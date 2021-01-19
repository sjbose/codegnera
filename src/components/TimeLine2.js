import React from 'react';

import styled from 'styled-components';
import BadgeComponent from './BadgeComponent';
import SQL from '../assets/images/timelineIcons/sql.png';
import MongoDb from '../assets/images/timelineIcons/mongo.png';
import Redis from '../assets/images/timelineIcons/redis.png';
import Elastic from '../assets/images/timelineIcons/elastic.png';
import Algolia from '../assets/images/timelineIcons/algolia.png';
import Git from '../assets/images/timelineIcons/gitH.png';

import Js from '../assets/images/timelineIcons/JavaScript.png';
import HtmlCssJs from '../assets/images/timelineIcons/html_css_js.png';
import Uiux from '../assets/images/timelineIcons/ui.png';

import '../styles/timeline.css'
import RectangularBadge from './RectagularBadge';

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
const LineLi = styled.li.attrs(props => ({
    type: props.type || 'li'
}))`
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
    padding:8px 2px;
    p{
        padding:'10px'
    }
`;
const ComponentsWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
`;

const TimeLine2 = (props) => {
    return (
        <div>
            <LineUl>
                <LineLi>
                    <h3>Database</h3>
                    <p></p>
                    < BadgeWrapper>
                        <ComponentsWrapper>
                            <BadgeComponent imgUrl={MongoDb} />
                            <p>MongoDb</p>
                        </ComponentsWrapper>
                        <ComponentsWrapper>
                            <BadgeComponent imgUrl={SQL} />
                            <p>SQL</p>
                        </ComponentsWrapper>
                        <ComponentsWrapper>
                            <BadgeComponent imgUrl={Redis} />
                            <p>Redis</p>
                        </ComponentsWrapper>

                    </ BadgeWrapper>
                </LineLi>
                <LineLi>
                    <h3>Search engine</h3>
                    <BadgeWrapper>
                        <ComponentsWrapper>
                            <BadgeComponent imgUrl={Elastic} />
                            <p>Elastic Search</p>
                        </ComponentsWrapper>
                        <ComponentsWrapper>
                            <BadgeComponent imgUrl={Algolia} />
                            <p>Algolia Search</p>
                        </ComponentsWrapper>
                    </BadgeWrapper>

                </LineLi>
                <LineLi>
                    <h3>Version Control</h3>
                    <p>Git is a distributed version-control system for tracking changes in any set of files</p>
                    <BadgeWrapper>
                        <RectangularBadge imgUrl={Git} />
                    </BadgeWrapper>
                </LineLi>
                <LineLi>
                    <h3>JavaScript</h3>
                    <p>"ES5,ES6,ES7!" <span role="img" aria-label="mike">📣</span>
                    </p>
                    <BadgeWrapper>
                        <BadgeComponent imgUrl={Js} />
                    </BadgeWrapper>
                </LineLi>
                <LineLi>
                    <BadgeWrapper>
                        <RectangularBadge imgUrl={Uiux} />
                    </BadgeWrapper>
                    <p >UX design refers to the term <strong>User experience</strong> , while UI stands for
                  <strong>user
                    interface design</strong>. Both elements are
                  crucial to a product and work closely together.</p>
                </LineLi>
                <LineLi>
                    <h3>Html,css,js</h3>
                    <p>html,css,js are basic block of web technology</p>
                    <BadgeWrapper>
                        <RectangularBadge imgUrl={HtmlCssJs} />
                    </BadgeWrapper>
                </LineLi>
            </LineUl>

        </div>
    )
}

export default TimeLine2;
