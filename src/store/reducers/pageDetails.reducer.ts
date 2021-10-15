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
        title: action.payload,
      };

    case PAGE_DETAILS.UPDATE_NOTE_POSITIONS:
      return {
        ...state,
        notes: action.payload,
      };
    default:
      return state;
  }
}
