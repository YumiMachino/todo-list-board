// Initial state -> get info grom localstorage
// add items
// delete item
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// initial state
const sampleToDos = {
  list: [
    {
      id: 1,
      item: 'Do laundry',
    },
    {
      id: 2,
      item: 'Finish assignment',
    },
    {
      id: 3,
      item: 'Create to do app',
    },
    {
      id: 4,
      item: 'Study React',
    },
  ],
};

// Create context (context has Provider)
export const GlobalContext = createContext(sampleToDos);

// Provider component
export const GlobalProvider = ({ children }) => {
  // state, and all the action
  const [state, dispatch] = useReducer(AppReducer, sampleToDos);

  // Actions
  function deleteItem(id) {
    dispatch({
      type: 'DELETE_ITEM',
      payload: id,
    });
  }

  function addItem(item) {
    dispatch({
      type: 'ADD_ITEM',
      payload: item,
    });
  }

  function updateItem(item) {
    dispatch({
      type: 'UPDATE_ITEM',
      payload: item,
    });
  }

  function createNewItem() {}

  return (
    <GlobalContext.Provider
      value={{
        list: state.list,
        deleteItem,
        addItem,
        updateItem,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
