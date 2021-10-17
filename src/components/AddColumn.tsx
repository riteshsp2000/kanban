import React from 'react';

// Libraries
import styled from 'styled-components';

// Components
import { Heading2 } from '.';

// State Handlers
import { usePageDetails } from '../store/contexts/PageDetailsProvider';
import { PAGE_DETAILS } from '../store/types/pageDetails.action';

const ColumnContainer = styled.div`
  display: inline-block;
  width: auto;
  height: auto;

  padding: 0.5rem;
  width: 240px;
  min-width: 240px;
`;

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

  &:hover {
    cursor: pointer;
  }
`;

const AddColumn: React.FC = () => {
  const [, dispatch] = usePageDetails();

  const onCardClick = () =>
    dispatch({
      type: PAGE_DETAILS.ADD_NEW_COLUMN,
    });

  return (
    <ColumnContainer>
      <Wrapper onClick={onCardClick} color='rgba(173, 173, 173, 0.2)'>
        <Title color='rgba(173, 173, 173, 1)'>Add new Column</Title>
      </Wrapper>
    </ColumnContainer>
  );
};

export default AddColumn;
