import React from 'react';

// Libraries
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';

// Components
import { SectionTitle, Card, Modal } from '.';
import { usePageDetails } from '../store/contexts/PageDetailsProvider';
import { PAGE_DETAILS } from '../store/types/pageDetails.action';
import AddCard from './AddCard';

// Types
import { TaskType, ColumnType } from '../store/types/pageDetails.action';

const ColumnContainer = styled.div`
  display: inline-block;
  width: auto;
  height: auto;
  min-height: 25rem;

  padding: 0.5rem;
  width: 240px;
  min-width: 240px;
`;

interface CardsColumnProps {
  column: ColumnType;
  tasks: TaskType[];
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
          <SectionTitle
            columnId={column.id}
            title={column.title}
            color1={column.color1}
            color2={column.color2}
          />
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
