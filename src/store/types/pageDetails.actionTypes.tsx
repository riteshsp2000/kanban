export const initialState = {
  title: undefined,
  description: undefined,
  notes: {
    tasks: {},
    columns: {
      'column-1': {
        id: 'column-1',
        color1: 'var(--color-one-light)',
        color2: 'var(--color-one-dark)',
        title: 'Todo',
        taskIds: [],
      },
      'column-2': {
        id: 'column-2',
        color1: 'var(--color-two-light)',
        color2: 'var(--color-two-dark)',
        title: 'In Progress',
        taskIds: [],
      },
      'column-3': {
        id: 'column-3',
        color1: 'var(--color-three-light)',
        color2: 'var(--color-three-dark)',
        title: 'Review',
        taskIds: [],
      },
      'column-4': {
        id: 'column-4',
        color1: 'var(--color-four-light)',
        color2: 'var(--color-four-dark)',
        title: 'Completed',
        taskIds: [],
      },
    },
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
  },
};

export interface TaskType {
  id: string;
  title: string;
  description: string;
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

export interface IntialstateType {
  title: string;
  details: string;
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
