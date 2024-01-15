import React from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.section`
  background-color: #fff;
  padding: 2em;
`;

const Contact = () => (
  <ContactWrapper>
    <h2>Contact Me</h2>
    <p>Email: your.email@example.com</p>
    <p>LinkedIn: linkedin.com/in/yourname</p>
    <p>GitHub: github.com/yourusername</p>
  </ContactWrapper>
);

export default Contact;
