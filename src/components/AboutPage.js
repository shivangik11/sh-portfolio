import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: grey;
  color: white;
  font-size: 24px;
`;

function AboutPage() {
  return (
    <AboutContainer>
      This is the About page.
    </AboutContainer>
  );
}

export default AboutPage;
