import React, { useState } from 'react';

// Library
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { resetServerContext } from 'react-beautiful-dnd';
import styled from 'styled-components';

import {
  Heading1,
  Heading2,
  Body1,
  Body2,
  LargeInput,
  SmallInput,
  CardsColumn,
  PageLayout,
} from '../components';

resetServerContext();

const Container = styled.div`
  display: flex;
`;

const NotesContainer = styled.div`
  width: auto;
  overflow-x: hidden;
  padding-bottom: 2rem;

  &:hover {
    overflow-x: scroll;
  }

  &::-webkit-scrollbar {
    width: 2px;
    height: 5px;
    display: hidden;
  }

  &::-webkit-scrollbar-track {
    background: var(--color-background-secondary);
    height: auto;
    border-radius: 10px;
    padding-top: 2rem;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-secondary);
    border-radius: 10px;
  }
`;

const initialData = {
  tasks: {
    'task-1': { id: 'task-1', title: 'card title1', description: 'Description of the card' },
    'task-2': { id: 'task-2', title: 'card title2', description: 'Description of the card' },
    'task-3': { id: 'task-3', title: 'card title3', description: 'Description of the card' },
    'task-4': { id: 'task-4', title: 'card title4', description: 'Description of the card' },
    'task-5': { id: 'task-5', title: 'card title5', description: 'Description of the card' },
    'task-6': { id: 'task-6', title: 'card title6', description: 'Description of the card' },
    'task-7': { id: 'task-7', title: 'card title7', description: 'Description of the card' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      color1: 'var(--color-one-light)',
      color2: 'var(--color-one-dark)',
      title: 'Todo',
      taskIds: ['task-1', 'task-5', 'task-6'],
    },
    'column-2': {
      id: 'column-2',
      color1: 'var(--color-two-light)',
      color2: 'var(--color-two-dark)',
      title: 'In Progress',
      taskIds: ['task-2', 'task-7'],
    },
    'column-3': {
      id: 'column-3',
      color1: 'var(--color-three-light)',
      color2: 'var(--color-three-dark)',
      title: 'Review',
      taskIds: ['task-3'],
    },
    'column-4': {
      id: 'column-4',
      color1: 'var(--color-four-light)',
      color2: 'var(--color-four-dark)',
      title: 'Completed',
      taskIds: ['task-4'],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
};

const IndexPage = () => {
  const [largeinput, setLargeInput] = useState<string | undefined>('');
  const [smallInput, setSmallInput] = useState<string | undefined>();
  const [data, setData] = useState<any>(initialData);

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId, type } = result;
    //If there is no destination
    if (!destination) {
      return;
    }

    //If source and destination is the same
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    //If you're dragging columns
    if (type === 'column') {
      const newColumnOrder = Array.from(data.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);
      const newState = {
        ...data,
        columnOrder: newColumnOrder,
      };
      setData(newState);
      return;
    }

    //Anything below this happens if you're dragging tasks
    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    //If dropped inside the same column
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };
      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };
      setData(newState);
      return;
    }

    //If dropped in a different column
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setData(newState);
  };

  return (
    <PageLayout>
      <Heading1>Title of this Page</Heading1>
      <Body1>Description of this page if neede and what not etc etc</Body1>
      <Heading2>Title of Card</Heading2>
      <Body2>Description of the card</Body2>

      <LargeInput
        type='text'
        placeholder='Title of this page'
        value={largeinput}
        onChange={(e) => {
          console.log(e.target.value);
          setLargeInput(e.target.value);
        }}
      />
      <SmallInput
        placeholder='Description of this page'
        value={smallInput}
        onChange={(e) => setSmallInput(e.target.value)}
        spellCheck={false}
      />

      <NotesContainer>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='all-columns' direction='horizontal' type='column'>
            {(provided) => (
              <Container {...provided.droppableProps} ref={provided.innerRef}>
                {data.columnOrder.map((id: string, index: number) => {
                  const column = data.columns[id];
                  const tasks = column.taskIds.map((taskId: string) => data.tasks[taskId]);

                  return (
                    <CardsColumn key={column.id} column={column} tasks={tasks} index={index} />
                  );
                })}
              </Container>
            )}
          </Droppable>
        </DragDropContext>
      </NotesContainer>
    </PageLayout>
  );
};

export default IndexPage;
