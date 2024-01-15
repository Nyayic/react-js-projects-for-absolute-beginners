import React from 'react';
import styled from 'styled-components';

const ProjectsWrapper = styled.section`
  background-color: ${(props) => props.theme.secondaryColor};
  color: #fff;
  padding: 2em;
`;

const Projects = () => (
  <ProjectsWrapper>
    <h2>Projects</h2>
    <ul>
      <li>Project 1</li>
      <li>Project 2</li>
      <li>Project 3</li>
    </ul>
  </ProjectsWrapper>
);

export default Projects;
