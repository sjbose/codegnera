import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Navbar from './Navbar';
import Footer from './Footer';


const ContentStyles = styled.div`
    background: #ECF0F3;
    
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
