import React from 'react'
import { ProjectsContainer, TitleWrapper, Title, SubTitle, TitleContainer } from '../styles/ProjectPage.elements';
import WorkShowCase from '../components/WorkShowCase';




const projects = () => {
    return (
        <>
            <TitleContainer>
                <TitleWrapper>
                    <Title># Projects</Title>
                    <SubTitle>Some of my recent work</SubTitle>
                </TitleWrapper>
            </TitleContainer>


            <ProjectsContainer>
                <WorkShowCase />
            </ProjectsContainer>
        </>
    )
}

export default projects;
