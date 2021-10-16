import React from 'react';

// Library
import { DragDropContext, Droppable, resetServerContext } from 'react-beautiful-dnd';
import styled from 'styled-components';

// State Handlers
import { PAGE_DETAILS } from '../store/types/pageDetails.action';
import { usePageDetails } from '../store/contexts/PageDetailsProvider';

// Components
import { LargeInput, SmallInput, CardsColumn, SEO } from '../components';

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

const IndexPage = () => {
  const [state, dispatch] = usePageDetails();

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
      const newColumnOrder = Array.from(state.notes.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);
      const newState = {
        ...state.notes,
        columnOrder: newColumnOrder,
      };
      // setData(newState);
      dispatch({
        type: PAGE_DETAILS.UPDATE_NOTE_POSITIONS,
        payload: newState,
      });
      return;
    }

    //Anything below this happens if you're dragging tasks
    const start = state.notes.columns[source.droppableId];
    const finish = state.notes.columns[destination.droppableId];

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
        ...state.notes,
        columns: {
          ...state.notes.columns,
          [newColumn.id]: newColumn,
        },
      };
      // setData(newState);
      dispatch({
        type: PAGE_DETAILS.UPDATE_NOTE_POSITIONS,
        payload: newState,
      });
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
      ...state.notes,
      columns: {
        ...state.notes.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    // setData(newState);
    dispatch({
      type: PAGE_DETAILS.UPDATE_NOTE_POSITIONS,
      payload: newState,
    });
  };

  return (
    <>
      <SEO />
      <LargeInput
        type='text'
        placeholder='Title of this page'
        value={state.title}
        onChange={(e) => {
          dispatch({
            type: PAGE_DETAILS.UPDATE_PAGE_TITLE,
            payload: e.target.value,
          });
        }}
      />
      <SmallInput
        placeholder='Description of this page'
        value={state.description}
        onChange={(e) => {
          dispatch({
            type: PAGE_DETAILS.UPDATE_PAGE_DESCRIPTION,
            payload: e.target.value,
          });
        }}
        spellCheck={false}
      />

      <NotesContainer>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='all-columns' direction='horizontal' type='column'>
            {(provided) => (
              <Container {...provided.droppableProps} ref={provided.innerRef}>
                {state.notes.columnOrder.map((id: string, index: number) => {
                  const column = state.notes.columns[id];
                  const tasks = column.taskIds.map((taskId: string) => state.notes.tasks[taskId]);

                  return (
                    <CardsColumn key={column.id} column={column} tasks={tasks} index={index} />
                  );
                })}
              </Container>
            )}
          </Droppable>
        </DragDropContext>
      </NotesContainer>
    </>
  );
};

export default IndexPage;
