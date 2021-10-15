import React, { useReducer, useMemo, createContext, useContext } from 'react';

// Reducer, Initial State, Types
import pageDetailsReducer from '../reducers/pageDetails.reducer';
import { initialState, InitialStateType, ActionType } from '../types/pageDetails.action';

const PageDetailsContext = createContext(initialState);

export function PageDetailsProvider(props: any): JSX.Element {
  const [state, dispatch] = useReducer(pageDetailsReducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);

  return <PageDetailsContext.Provider value={value} {...props} />;
}

export function usePageDetails(): [state: InitialStateType, dispatch: React.Dispatch<ActionType>] {
  const context = useContext(PageDetailsContext);
  if (!context) throw new Error('useCompose must be used within a PageDetailsProvider');

  // @ts-ignore
  const [state, dispatch] = context;

  return [state, dispatch];
}
