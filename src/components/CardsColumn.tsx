import React, { ChangeEvent, useState } from 'react';

// Libraries
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';

// Components
import { SectionTitle, Card, Modal } from '.';

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
  console.log(column);
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
                  <Card onClick={() => {}} key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </ColumnContainer>
      )}
    </Draggable>
  );
};

export default CardsColumn;
