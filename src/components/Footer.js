import React from 'react'
import { Container, ColOne, ColTwo, FooterLink, SocialLink, SubCol, Row, Hr } from '../styles/footer.elements'






const Footer = () => {
    return (
        <>
            <Hr />
            <Container>

                <ColOne>
                    <Row>
                        <p> &copy; Codegenera {new Date().getFullYear()}</p>
                        <hr />
                        <FooterLink style={{ padding: '10px' }} to='/privacy'>privacy policy</FooterLink>
                    </Row>
                </ColOne>
                <ColTwo>
                    <SubCol>
                        <SocialLink href="https://medium.com/@sj_bose"
                            target="_blank">Medium</SocialLink>
                        <SocialLink href="https://twitter.com/sj_bose"
                            target="_blank" >Twitter</SocialLink>
                        <SocialLink href="/" target="_blank">Instagram</SocialLink>
                    </SubCol>
                    <SubCol>
                        <SocialLink href="https://dribbble.com/KuboO" target="_blank">Dribble</SocialLink>
                        <SocialLink href="https://in.pinterest.com/subhajeetdoc/_saved/"
                            target="_blank">Pinterest</SocialLink>
                        <SocialLink href="https://www.behance.net/subhajeetbose"
                            target="_blank">Behance</SocialLink>
                    </SubCol>

                    <SubCol>
                        <FooterLink to="/projects">Projects</FooterLink>
                        <FooterLink to="/service">Services</FooterLink>
                        <FooterLink to="/blog">Articles</FooterLink>
                        <FooterLink to="/contact">Contact</FooterLink>
                    </SubCol>
                </ColTwo>
            </Container>
        </>
    )
}

export default Footer
