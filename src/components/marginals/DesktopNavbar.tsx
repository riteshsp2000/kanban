import React, { useState } from 'react';

// Libraries
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faCog, faHome, faPlus } from '@fortawesome/free-solid-svg-icons';

// Components
import { Heading2 } from '..';

const NavName = styled(Heading2)<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? '#49ACF7' : '#536480')};
  font-weight: ${({ isActive }) => (isActive ? '700' : '500')};
  padding: 0px;
  margin-left: 10px;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 16px;

  &:hover {
    cursor: pointer;
  }
`;

const Container = styled.div<{ showNavbar: boolean }>`
  width: 250px;
  height: 100vh;
  overflow: hidden;

  padding: 5rem 1.5rem;
  background: var(--color-background-secondary);

  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 9;

  @media (max-width: 700px) {
    left: ${({ showNavbar }) => (showNavbar ? '0px' : '-100%')};
    transition: 350ms;
  }
`;

const Nav = styled.nav`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const DividerContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const H4 = styled.h4`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 0.9rem;
  line-height: 1rem;
  color: #536480;
`;

const NAVITEMS = {
  SECTION1: [
    {
      icon: faHome,
      name: 'Home',
      id: 'nav-section1-home',
      to: '/',
    },
    {
      icon: faCog,
      name: 'Settings',
      id: 'nav-section1-settings',
      to: '/',
    },
  ],
  SECTION2: [
    {
      icon: faFile,
      name: 'Page 1',
      id: 'nav-section2-page1',
      to: '/',
    },
    {
      icon: faFile,
      name: 'Page2',
      id: 'nav-section2-page2',
      to: '/',
    },
    {
      icon: faFile,
      name: 'Page3',
      id: 'nav-section2-page3',
      to: '/',
    },
  ],
};

const DesktopNavbar: React.FC<{ showNavbar: boolean; toggleShowNavbar: () => void }> = ({
  showNavbar,
  toggleShowNavbar,
}) => {
  const [active, setActive] = useState<string | undefined>('');

  const onNavItemClick = (id: string) => {
    setActive(id);
    toggleShowNavbar();
  };

  return (
    <Container showNavbar={showNavbar}>
      <Nav>
        {NAVITEMS.SECTION1.map(({ icon, name, id }) => (
          <NavItem key={id} onClick={() => onNavItemClick(id)}>
            <FontAwesomeIcon icon={icon} color={active === id ? '#49ACF7' : '#536480'} />
            <NavName isActive={active === id}>{name}</NavName>
          </NavItem>
        ))}

        <DividerContainer>
          <H4>PAGES</H4>
          <FontAwesomeIcon icon={faPlus} size='1x' color='#536480' />
        </DividerContainer>

        {NAVITEMS.SECTION2.map(({ icon, name, id }) => (
          <NavItem key={id} onClick={() => onNavItemClick(id)}>
            <FontAwesomeIcon icon={icon} color={active === id ? '#49ACF7' : '#536480'} />
            <NavName isActive={active === id}>{name}</NavName>
          </NavItem>
        ))}
      </Nav>
    </Container>
  );
};

export default DesktopNavbar;
