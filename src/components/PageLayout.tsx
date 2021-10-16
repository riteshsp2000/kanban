import React, { useState } from 'react';

// Libraries
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// Components
import { DesktopNavbar } from '.';

const PrimeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow-x: hidden;
  position: relative;
`;

const WrapperContainer = styled.div`
  width: calc(100vw - 250px);
  height: 100%;
  padding-top: 4rem;
  overflow-x: hidden;

  position: absolute;
  left: 250px;
  top: 0px;

  @media (max-width: 700px) {
    width: 100vw;
    left: 0px;
    transition: 350ms;
    z-index: 5;
  }
`;

const JustifyContainer = styled.div`
  margin: auto auto;
  max-width: var(--max-width);
  padding: 1rem 1.2rem;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Icon = styled(FontAwesomeIcon)`
  color: var(--color-secondary);
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 10;
  display: none;

  @media (max-width: 700px) {
    display: inline;
  }

  &:hover {
    cursor: pointer;
  }
`;

const PageLayout: React.FC = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleShowNavbar = () => setShowNavbar((current) => !current);

  return (
    <PrimeContainer>
      <Icon icon={faBars} onClick={toggleShowNavbar} />

      <DesktopNavbar toggleShowNavbar={toggleShowNavbar} showNavbar={showNavbar} />

      <WrapperContainer onClick={() => (showNavbar ? toggleShowNavbar() : null)}>
        <JustifyContainer>{children}</JustifyContainer>
      </WrapperContainer>
    </PrimeContainer>
  );
};

export default PageLayout;
