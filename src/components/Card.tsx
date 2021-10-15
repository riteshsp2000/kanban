import React from 'react';

// Libraries
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

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
  margin-top: 0.7rem;

  border-radius: 4px;
  background: var(--color-background-secondary);

  &:hover {
    cursor: pointer;
  }
`;

interface TaskObject {
  id: string;
  title: string;
  description: string;
}

interface CardProps {
  onClick: () => void;
  index: number;
  task: TaskObject;
}

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
