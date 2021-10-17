import { InitialStateType, PAGE_DETAILS, ActionType } from '../types/pageDetails.action';

export default function pageDetailsReducer(
  state: InitialStateType,
  action: ActionType,
): InitialStateType {
  switch (action.type) {
    case PAGE_DETAILS.UPDATE_PAGE_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case PAGE_DETAILS.UPDATE_PAGE_DESCRIPTION:
      return {
        ...state,
        description: action.payload,
      };

    case PAGE_DETAILS.UPDATE_NOTE_POSITIONS:
      return {
        ...state,
        notes: action.payload,
      };

    case PAGE_DETAILS.UPDATE_SELECTED_NOTE:
      return {
        ...state,
        selectedNote: action.payload,
      };

    case PAGE_DETAILS.UPDATE_NOTE_TITLE:
      return {
        ...state,
        notes: {
          ...state.notes,
          tasks: {
            ...state.notes.tasks,
            [action.payload.id]: {
              ...state.notes.tasks[action.payload.id],
              title: action.payload.value,
            },
          },
        },
      };

    case PAGE_DETAILS.UPDATE_NOTE_DESCRIPTION:
      return {
        ...state,
        notes: {
          ...state.notes,
          tasks: {
            ...state.notes.tasks,
            [action.payload.id]: {
              ...state.notes.tasks[action.payload.id],
              description: action.payload.value,
            },
          },
        },
      };

    case PAGE_DETAILS.ADD_NEW_CARD:
      return {
        ...state,
        notes: {
          ...state.notes,
          tasks: {
            ...state.notes.tasks,
            [`task-${Object.keys(state.notes.tasks).length + 1}`]: {
              id: `task-${Object.keys(state.notes.tasks).length + 1}`,
              title: undefined,
              description: undefined,
            },
          },
          columns: {
            ...state.notes.columns,
            [action.payload.column]: {
              ...state.notes.columns[action.payload.column],
              taskIds: [
                ...state.notes.columns[action.payload.column].taskIds,
                `task-${Object.keys(state.notes.tasks).length + 1}`,
              ],
            },
          },
        },
      };

    case PAGE_DETAILS.DELETE_CARD: {
      const tasks = state.notes.tasks;
      delete tasks[action.payload.id];

      return {
        ...state,
        notes: {
          ...state.notes,
          tasks,
          columns: {
            ...state.notes.columns,
            [action.payload.column]: {
              ...state.notes.columns[action.payload.column],
              taskIds: state.notes.columns[action.payload.column].taskIds.filter(
                (id) => id != action.payload.id,
              ),
            },
          },
        },
      };
    }

    case PAGE_DETAILS.UPDATE_COLUMN_TITLE:
      return {
        ...state,
        notes: {
          ...state.notes,
          columns: {
            ...state.notes.columns,
            [action.payload.id]: {
              ...state.notes.columns[action.payload.id],
              title: action.payload.value,
            },
          },
        },
      };

    case PAGE_DETAILS.ADD_NEW_COLUMN:
      return {
        ...state,
        notes: {
          ...state.notes,
          columns: {
            ...state.notes.columns,
            [`column-${Object.keys(state.notes.columns).length + 1}`]: {
              id: `column-${Object.keys(state.notes.columns).length + 1}`,
              color1: 'var(--color-one-light)',
              color2: 'var(--color-one-dark)',
              title: '',
              taskIds: [],
            },
          },
          columnOrder: [
            ...state.notes.columnOrder,
            `column-${Object.keys(state.notes.columns).length + 1}`,
          ],
        },
      };

    case PAGE_DETAILS.DELETE_COLUMN: {
      const columns = state.notes.columns;
      delete columns[action.payload.columnId];

      return {
        ...state,
        notes: {
          ...state.notes,
          columns,
          columnOrder: state.notes.columnOrder.filter((id) => id !== action.payload.columnId),
        },
      };
    }

    default:
      return state;
  }
}
