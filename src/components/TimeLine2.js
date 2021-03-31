import React from 'react';
import { LineUl, LineLi, BadgeWrapper, ComponentsWrapper } from '../styles/TimeLineComponent.element';

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

                </LineLi>
                <LineLi>
                    <h3>Html,css,js</h3>

                    <BadgeWrapper>
                        <RectangularBadge imgUrl={HtmlCssJs} />
                    </BadgeWrapper>
                </LineLi>
            </LineUl>

        </div>
    )
}

export default TimeLine2;
