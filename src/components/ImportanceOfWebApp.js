import React from 'react';
import { WhitePaper, TextWrapper, ChatButton } from '../styles/AboutPage.elements';


const ImportanceOfWebApp = ({ title, content, offerHeading, offerContent, doubts, buttonTxt }) => {
    return (
        <WhitePaper extraWidth >

            <TextWrapper>
                <h3>{title}</h3>
                <p>{content}</p>
                <h3>{offerHeading}</h3>
                <p>{offerContent}</p>
                <h5>{doubts}</h5>
            </TextWrapper>
            <ChatButton to="/contact">{buttonTxt}</ChatButton>
        </WhitePaper>
    )
}

export default ImportanceOfWebApp;
