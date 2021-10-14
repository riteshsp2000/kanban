import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import Heading2 from './typography/Heading2';

const Title = styled(Heading2)`
  color: ${({ color }) => color};
`;

const Wrapper = styled.div`
  width: 12.5rem;
  height: 1.5rem;
  border-radius: 4px;
  padding: 5px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
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
