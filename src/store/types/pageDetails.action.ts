export const initialState = {
  title: undefined,
  description: undefined,
  selectedNote: undefined,
  colors: [
    {
      background: 'var(--color-one-background)',
      color: 'var(--color-one)',
      name: 'Blue',
    },
    {
      background: 'var(--color-two-background)',
      color: 'var(--color-two)',
      name: 'Red',
    },
    {
      background: 'var(--color-three-background)',
      color: 'var(--color-three)',
      name: 'Green',
    },
    {
      background: 'var(--color-four-background)',
      color: 'var(--color-four)',
      name: 'Purple',
    },
    {
      background: 'var(--color-five-background)',
      color: 'var(--color-five)',
      name: 'Cyan',
    },
    {
      background: 'var(--color-six-background)',
      color: 'var(--color-six)',
      name: 'Orange',
    },
    {
      background: 'var(--color-seven-background)',
      color: 'var(--color-seven)',
      name: 'Yellow',
    },
    {
      background: 'var(--color-eight-background)',
      color: 'var(--color-eight)',
      name: 'Pink',
    },
  ],
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
    },
    columnOrder: ['column-1', 'column-2', 'column-3'],
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

export interface ColorType {
  color: string;
  background: string;
  name: string;
}

export interface InitialStateType {
  title: string | undefined;
  description: string | undefined;
  selectedNote: string | undefined;
  colors: ColorType[];
  notes: NotesType;
}

export enum PAGE_DETAILS {
  UPDATE_NOTE_TITLE = 'Update note title',
  UPDATE_NOTE_DESCRIPTION = 'Update note description',
  UPDATE_NOTE_POSITIONS = 'Update note positions',
  UPDATE_SELECTED_NOTE = 'Update the selected note',
  UPDATE_PAGE_TITLE = 'Update page title',
  UPDATE_PAGE_DESCRIPTION = 'Update page description',
  ADD_NEW_CARD = 'Add New card in column',
  DELETE_CARD = 'Delete Card',
  ADD_NEW_COLUMN = 'Add new column',
  DELETE_COLUMN = 'Delete column',
  UPDATE_COLUMN_TITLE = 'Update Column Title',
  UPDATE_COLUMN_COLOR = 'Update Column Color',
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

export interface AddNewCard {
  type: PAGE_DETAILS.ADD_NEW_CARD;
  payload: {
    column: string;
  };
}

export interface DeleteCard {
  type: PAGE_DETAILS.DELETE_CARD;
  payload: {
    id: string;
    column: string;
  };
}

export interface UpdateColumnTitle {
  type: PAGE_DETAILS.UPDATE_COLUMN_TITLE;
  payload: {
    id: string;
    value: string;
  };
}

export interface AddNewColumn {
  type: PAGE_DETAILS.ADD_NEW_COLUMN;
}

export interface DeleteColumn {
  type: PAGE_DETAILS.DELETE_COLUMN;
  payload: {
    columnId: string;
  };
}

export interface UpdateColumnColor {
  type: PAGE_DETAILS.UPDATE_COLUMN_COLOR;
  payload: {
    columnId: string;
    color: string;
    background: string;
  };
}

export type ActionType =
  | UpdatePageTitle
  | UpdatePageDescription
  | UpdatNotePostion
  | SelectNote
  | UpdateNoteTitle
  | UpdateNoteDescription
  | AddNewCard
  | DeleteCard
  | UpdateColumnTitle
  | AddNewColumn
  | DeleteColumn
  | UpdateColumnColor;
