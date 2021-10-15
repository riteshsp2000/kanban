import React from 'react';

// Libraries
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

// Components
import { Heading2, Body2, Modal } from '.';

// State Handlers
import { usePageDetails } from '../store/contexts/PageDetailsProvider';

/**
 * H2 is the title of the note
 * B2 is a shortened description of the note.
 */
const H2 = styled(Heading2)`
  padding: 0px;
  padding-bottom: 2px;
`;

const B2 = styled(Body2)`
  padding: 0px;
`;

/**
 * Parent card box which handles the sizing and
 * the background of the card
 */
const CardContainer = styled.div`
  width: 100%;
  height: 70px;
  padding: 0.7rem;
  overflow: hidden;
  margin-top: 0.7rem;

  border-radius: 4px;
  background: var(--color-background-secondary);

  &:hover {
    cursor: pointer;
  }
`;

/**
 * Defines the task structure
 * TODO: Add it in the global scope
 */
interface TaskObject {
  id: string;
  title: string;
  description: string;
}

/**
 * Props passed onto the Card component
 */
interface CardProps {
  onClick: () => void;
  index: number;
  task: TaskObject;
}

// TODO: Shift to utilities directory
const limitString = (str: string, length: number) =>
  str.length > length ? `${str.substring(0, length)}...` : str;

const Card: React.FC<CardProps> = ({ onClick, task, index }) => (
  <Draggable draggableId={task.id} index={index}>
    {(provided, snapshot) => (
      <CardContainer
        onClick={onClick}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        <H2>{task.title ? limitString(task.title, 20) : 'Title of this card'}</H2>
        <B2>{task.description ? limitString(task.description, 20) : 'Description of this card'}</B2>
      </CardContainer>
    )}
  </Draggable>
);

export default Card;
