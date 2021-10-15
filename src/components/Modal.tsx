import React, { HTMLAttributes, ChangeEvent } from 'react';

// Libraries
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

// Components
import { LargeInput, SmallInput } from '.';

// State Handlers
import { usePageDetails } from '../store/contexts/PageDetailsProvider';
import { PAGE_DETAILS } from '../store/types/pageDetails.action';

interface ModalDivProps extends HTMLAttributes<HTMLDivElement> {
  show: boolean;
}

const ModalBackground = styled.div<ModalDivProps>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100vw;
  height: auto;
  min-height: 100vh;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  background: var(--color-background-secondary);
  width: 90%;
  height: auto;
  max-width: 890px;
  min-height: 600px;

  border-radius: 5px;
  padding: 1.5rem 1rem;
  margin: auto auto;

  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 2;
`;

const FirstRowContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

interface ModalProps {
  title: string | undefined;
  description: string | undefined;
  id: string;
  columnId: string;
}

const Modal: React.FC<ModalProps> = ({ title, description, id, columnId }) => {
  const [state, dispatch] = usePageDetails();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: PAGE_DETAILS.UPDATE_NOTE_TITLE,
      payload: {
        id,
        value: e.target.value,
      },
    });

  const onTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    dispatch({
      type: PAGE_DETAILS.UPDATE_NOTE_DESCRIPTION,
      payload: {
        id,
        value: e.target.value,
      },
    });

  const deSelectNote = () =>
    dispatch({
      type: PAGE_DETAILS.UPDATE_SELECTED_NOTE,
      payload: undefined,
    });

  // @ts-ignore
  const onChildClick = (e: MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  // @ts-ignore
  const onClickDelete = (e: MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();

    dispatch({
      type: PAGE_DETAILS.DELETE_CARD,
      payload: {
        column: columnId,
        id: id,
      },
    });
  };

  return (
    // @ts-ignore
    <ModalBackground onClick={deSelectNote} show={state.selectedNote === id}>
      <ModalContent onClick={onChildClick}>
        <FirstRowContainer>
          <LargeInput
            value={title}
            onChange={onInputChange}
            type='text'
            placeholder='Title of this page'
          />

          <FontAwesomeIcon
            onClick={onClickDelete}
            icon={faTrashAlt}
            size='1x'
            color='var(--color-secondary)'
            style={{ margin: '0.4rem' }}
          />
        </FirstRowContainer>

        <SmallInput
          value={description}
          onChange={onTextAreaChange}
          spellCheck={false}
          placeholder='Description of this page'
        />
      </ModalContent>
    </ModalBackground>
  );
};

export default Modal;
