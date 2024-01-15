import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.section`
  background-color: #fff;
  padding: 2em;
`;

const About = () => (
  <AboutWrapper>
    <h2>About Me</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
      Sed id ex ut lacus tincidunt mattis. Integer nec lectus eu augue posuere
      venenatis non eu elit.
    </p>
  </AboutWrapper>
);

export default About;