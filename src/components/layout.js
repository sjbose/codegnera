import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Navbar from './Navbar';
import Footer from './Footer';
import backgroundImg from '../assets/images/newbg.svg';


const ContentStyles = styled.div`
    // background: #ECF0F3;
    background:url(${backgroundImg});
    // background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
`;
if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
}
const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <ContentStyles>
                <Navbar />
                {children}
                <Footer />
            </ContentStyles>


        </>
    )
}

export default Layout;
