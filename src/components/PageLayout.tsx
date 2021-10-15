import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import { DesktopNavbar } from '.';

const PrimeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow-x: hidden;
`;

const WrapperContainer = styled.div`
  width: calc(100vw - 250px);
  height: 100%;
  padding-top: 4rem;
  overflow-x: hidden;
`;

const JustifyContainer = styled.div`
  margin: auto auto;
  max-width: var(--max-width);
  padding: 1rem 1.2rem;
  overflow-x: hidden;
  overflow-y: auto;
`;

const PageLayout: React.FC = ({ children }) => (
  <PrimeContainer>
    <DesktopNavbar />

    <WrapperContainer>
      <JustifyContainer>{children}</JustifyContainer>
    </WrapperContainer>
  </PrimeContainer>
);

export default PageLayout;
