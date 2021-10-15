import React, { ChangeEvent, useState } from 'react';

// Libraries
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';

// Components
import { SectionTitle, Card, Modal } from '.';
import { usePageDetails } from '../store/contexts/PageDetailsProvider';
import { PAGE_DETAILS } from '../store/types/pageDetails.action';
import AddCard from './AddCard';

const ColumnContainer = styled.div`
  display: inline-block;
  width: auto;
  height: auto;

  padding: 0.5rem;
  width: 240px;
  min-width: 240px;
`;

interface ColumnObject {
  id: string;
  color1: string;
  color2: string;
  title: string;
  taskIds: string[];
}

interface TasksObject {
  id: string;
  title: string;
  description: string;
}

interface CardsColumnProps {
  column: ColumnObject;
  tasks: TasksObject[];
  index: number;
}

const CardsColumn: React.FC<CardsColumnProps> = ({ column, tasks, index }) => {
  const [, dispatch] = usePageDetails();

  const onCardClick = (id: string) =>
    dispatch({
      type: PAGE_DETAILS.UPDATE_SELECTED_NOTE,
      payload: id,
    });

  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <ColumnContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <SectionTitle title={column.title} color1={column.color1} color2={column.color2} />
          <Droppable droppableId={column.id} type='task'>
            {(provided, snapshot) => (
              <div
                style={{
                  flexGrow: 1,
                  background: snapshot.isDraggingOver ? 'rgba(34, 46, 62, 0.4)' : 'inherit',
                  minHeight: '100px',
                  borderRadius: '5px',
                }}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {tasks.map((task, index) => (
                  <React.Fragment key={task.id}>
                    <Card onClick={() => onCardClick(task.id)} task={task} index={index} />
                    <Modal
                      columnId={column.id}
                      title={task.title}
                      description={task.description}
                      id={task.id}
                    />
                  </React.Fragment>
                ))}
                {provided.placeholder}
                <AddCard columnId={column.id} />
              </div>
            )}
          </Droppable>
        </ColumnContainer>
      )}
    </Draggable>
  );
};

export default CardsColumn;
