import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import { Heading2, Body2 } from '.';

const H2 = styled(Heading2)`
  padding: 0px;
  padding-bottom: 2px;
`;

const B2 = styled(Body2)`
  padding: 0px;
`;

const CardContainer = styled.div`
  width: 220px;
  height: 70px;
  padding: 0.7rem;
  overflow: hidden;

  border-radius: 4px;
  background: var(--color-background-secondary);

  &:hover {
    cursor: pointer;
  }
`;

interface CardProps {
  setShow: (param: boolean | ((current: boolean) => boolean)) => void;
  title: string | undefined;
  description: string | undefined;
}

const limitString = (str: string, length: number) =>
  str.length > length ? `${str.substring(0, length)}...` : str;

const Card: React.FC<CardProps> = ({ setShow, title, description }) => (
  <CardContainer onClick={() => setShow(true)}>
    <H2>{title ? limitString(title, 20) : 'Title of this card'}</H2>
    <B2>{description ? limitString(description, 20) : 'Description of this card'}</B2>
  </CardContainer>
);

export default Card;
