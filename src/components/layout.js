import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Navbar from './Navbar';
import Footer from './Footer';
import backgroundImg from '../assets/images/BgFinal.svg';


const ContentStyles = styled.div`
        background:url(${backgroundImg});
    // background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
`;

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <Navbar />

            <ContentStyles>

                {children}
                <Footer />
            </ContentStyles>


        </>
    )
}

export default Layout;