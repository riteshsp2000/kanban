import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import Heading2 from './typography/Heading2';

const Title = styled(Heading2)`
  color: ${({ color }) => color};
  width: 100%;
  height: auto;
  margin: 0px;
  padding: 0px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 2.1rem;
  border-radius: 4px;
  padding: 0.7rem;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${({ color }) => color};
`;

interface SectionTitleProps {
  title: string;
  color1: string;
  color2: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, color1, color2 }) => (
  <Wrapper color={color1}>
    <Title color={color2}>{title}</Title>
  </Wrapper>
);

export default SectionTitle;
