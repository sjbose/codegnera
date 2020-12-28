import React from 'react';
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Navbar from './Navbar';
import Footer from './Footer';


const ContentStyles = styled.div`
    background: #ECF0F3;
    
`;
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
