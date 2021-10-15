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
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <ColumnContainer ref={provided.innerRef} {...provided.draggableProps}>
          <SectionTitle
            {...provided.dragHandleProps}
            title={column.title}
            color1={column.color1}
            color2={column.color2}
          />
          <Droppable droppableId={column.id} type='task'>
            {(provided, snapshot) => (
              <div
                style={{
                  display: 'inline',
                  background: snapshot.isDraggingOver ? '#d5f3ff' : 'inherit',
                }}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {tasks.map((task, index) => (
                  <Card onClick={() => {}} task={task} index={index} />
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
