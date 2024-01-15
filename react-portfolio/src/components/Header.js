import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: ${(props) => props.theme.primaryColor};
  color: #fff;
  padding: 1em;
  text-align: center;
  h1 {
    font-size: 2.5em;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 1.2em;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <h1>Your Name</h1>
    <p>Web Developer</p>
  </HeaderWrapper>
);

export default Header;