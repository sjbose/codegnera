import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Navbar from './Navbar';
import Footer from './Footer';
// import backgroundImg from '../assets/images/newbg.svg';
// import backgroundImg from '../assets/images/bgblue.svg';

const ContentStyles = styled.div`

    
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
