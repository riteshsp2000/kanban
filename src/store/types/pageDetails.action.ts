export const initialState = {
  title: undefined,
  description: undefined,
  selectedNote: undefined,
  notes: {
    tasks: {
      'task-1': { id: 'task-1', title: 'card title1', description: 'Description of the card' },
      'task-2': { id: 'task-2', title: 'card title2', description: 'Description of the card' },
      'task-3': { id: 'task-3', title: 'card title3', description: 'Description of the card' },
      'task-4': { id: 'task-4', title: 'card title4', description: 'Description of the card' },
    },
    columns: {
      'column-1': {
        id: 'column-1',
        color1: 'var(--color-one-light)',
        color2: 'var(--color-one-dark)',
        title: 'Todo',
        taskIds: ['task-1'],
      },
      'column-2': {
        id: 'column-2',
        color1: 'var(--color-two-light)',
        color2: 'var(--color-two-dark)',
        title: 'In Progress',
        taskIds: ['task-2'],
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
  },
};

export interface TaskType {
  id: string;
  title: string | undefined;
  description: string | undefined;
}

export interface ColumnType {
  id: string;
  color1: string;
  color2: string;
  title: string;
  taskIds: string[];
}

export interface NotesType {
  tasks: {
    [x: string]: TaskType;
  };
  columns: {
    [x: string]: ColumnType;
  };
  columnOrder: string[];
}

export interface InitialStateType {
  title: string | undefined;
  description: string | undefined;
  selectedNote: string | undefined;
  notes: NotesType;
}

export enum PAGE_DETAILS {
  UPDATE_NOTE_TITLE = 'Update note title',
  UPDATE_NOTE_DESCRIPTION = 'Update note description',
  UPDATE_NOTE_POSITIONS = 'Update note positions',
  UPDATE_SELECTED_NOTE = 'Update the selected note',
  UPDATE_PAGE_TITLE = 'Update page title',
  UPDATE_PAGE_DESCRIPTION = 'Update page description',
}

export interface UpdatePageTitle {
  type: PAGE_DETAILS.UPDATE_PAGE_TITLE;
  payload: string;
}
export interface UpdatePageDescription {
  type: PAGE_DETAILS.UPDATE_PAGE_DESCRIPTION;
  payload: string;
}

export interface UpdatNotePostion {
  type: PAGE_DETAILS.UPDATE_NOTE_POSITIONS;
  payload: NotesType;
}

export interface SelectNote {
  type: PAGE_DETAILS.UPDATE_SELECTED_NOTE;
  payload: string | undefined;
}

export interface UpdateNoteTitle {
  type: PAGE_DETAILS.UPDATE_NOTE_TITLE;
  payload: {
    id: string;
    value: string | undefined;
  };
}

export interface UpdateNoteDescription {
  type: PAGE_DETAILS.UPDATE_NOTE_DESCRIPTION;
  payload: {
    id: string;
    value: string | undefined;
  };
}

export type ActionType =
  | UpdatePageTitle
  | UpdatePageDescription
  | UpdatNotePostion
  | SelectNote
  | UpdateNoteTitle
  | UpdateNoteDescription;
