import React from 'react';

// Libraries
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// Components
import { Body2 } from '.';

// State Handlers
import { usePageDetails } from '../store/contexts/PageDetailsProvider';
import { PAGE_DETAILS } from '../store/types/pageDetails.action';

const Container = styled.div`
  width: 100%;
  margin-top: 12px;
  padding: 0.5rem 0.7rem;
  border-radius: 4px;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background-color: rgba(34, 46, 62, 0.4);
    cursor: pointer;
  }
`;

const AddCard: React.FC<{ columnId: string }> = ({ columnId }) => {
  const [, dispatch] = usePageDetails();

  const onClick = () =>
    dispatch({
      type: PAGE_DETAILS.ADD_NEW_CARD,
      payload: {
        column: columnId,
      },
    });

  return (
    <Container onClick={onClick}>
      <Body2 style={{ padding: 0, margin: 0 }}>Add Card</Body2>
      <FontAwesomeIcon icon={faPlus} color={'var(--color-secondary)'} size='1x' />
    </Container>
  );
};

export default AddCard;
